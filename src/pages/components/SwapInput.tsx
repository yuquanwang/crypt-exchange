import { Avatar, Input, List, Modal, Radio, RadioChangeEvent, Select } from 'antd'
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]


const Wrap = styled.div`
  background: ${({ theme }) => theme['@descriptions-bg']};
  border: 1px solid ${({ theme }) => theme['@border-color-base']};
  border-radius: ${({ theme }) => theme['@border-radius-base']}px;
`

const Header = styled.div`
  display: flex;
  padding: ${({ theme }) => theme['@padding-md']}px;
  padding-bottom: 0;
`

const Balance = styled.div`
  width: -webkit-fill-available;
  text-align: right;
  >.ant-radio-group {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme['@margin-xss']}px;
  }
  .ant-radio-group-small .ant-radio-button-wrapper {
    font-size: ${({ theme }) => theme['@font-size-sm']}px;
  }
`

const Amount = styled.div`
  display: flex;
  padding: ${({ theme }) => theme['@padding-md']}px;
  .ant-input {
    font-size: ${({ theme }) => theme['@font-size-base'] + 2}px;
    width: -webkit-fill-available;
    background: transparent;
    border: none;
    padding: 0;
  }
  .ant-input:focus, .ant-input-focused {
    box-shadow: none;
  }
  .ant-select {
    font-size: ${({ theme }) => theme['@font-size-base'] + 2}px;
    .ant-select-selector {
      pointer-events: none;
    }
  }
`

const Selection = styled(Modal)`
  max-width: 420px;
  width: 100%;
  .ant-modal-body {
    padding: 0;
    .ant-list-item-meta-title {
      margin-bottom: 0;
    }
    .ant-list-item-meta-description {
      line-height: 1;
    }
    .ant-list-split .ant-list-item {
      border-bottom: 0;
    }
    .ant-list-item {
      padding-left: ${({ theme }) => theme['@padding-lg']}px;
      padding-right: ${({ theme }) => theme['@padding-lg']}px;
      cursor: pointer;
      :hover {
        background: ${({ theme }) => theme['@descriptions-bg']};
      }
    }
  }
`

export default function SwapInput(props: SwapInputProps) {
  const { direction, onChange, balance } = props
  const [selecting, setSelecting] = useState(false)
  const [coin, setCoin] = useState<string>()
  const [amount, setAmount] = useState<string>()
  const [positionType, setPositionType] = useState<number>()

  const handleClickSelect = (e: MouseEvent) => {
    setSelecting(true)
  }

  const handleCancel = () => {
    setSelecting(false)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPositionType(undefined)
    setAmount(e.target.value.replace(/[^\d.]/, '').replace(/(\d+\.\d*)\./, '$1'))
  }

  const handleSelect = (value: string) => {
    setCoin(value)
    setSelecting(false)
  }

  const handlePositionChange = (e: RadioChangeEvent) => {
    setPositionType(e.target.value)
  }

  useEffect(() => {
    if (!balance) return
    switch (positionType) {
      case 0: setAmount(balance?.toString())
        break
      case 1: setAmount((balance * 0.8).toString())
        break
      case 2: setAmount((balance * 0.5).toString())
        break
      case 4: setAmount((balance * 0.3).toString())
        break
      default: return
    }
  }, [positionType, balance])

  useEffect(() => {
    onChange && onChange({ coin, amount })
  }, [coin, amount, onChange])

  return (
    <Wrap>
      <Header>
        <div>
          <span>{direction}</span>
        </div>
        {balance && <Balance>
          <Radio.Group value={positionType} buttonStyle="solid" size="small" onChange={handlePositionChange}>
            <Radio.Button value={0}>Max</Radio.Button>
            <Radio.Button value={1}>80%</Radio.Button>
            <Radio.Button value={2}>50%</Radio.Button>
            <Radio.Button value={3}>30%</Radio.Button>
          </Radio.Group>
          Balance: {balance}
        </Balance>}
      </Header>
      <Amount>
        <Input placeholder="0.0" value={amount} onChange={handleInputChange} />
        <Select defaultValue="lucy" value={coin} onClick={handleClickSelect}></Select>
      </Amount>
      <Selection title="Select a token" visible={selecting} footer={null} onCancel={handleCancel}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item onClick={() => handleSelect(item.title)}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={item.title}
                description="Ant Design"
              />
              <span>0.00910143</span>
            </List.Item>
          )}
        />
      </Selection>
    </Wrap >
  )
}

interface SwapInputData {
  coin?: string
  amount?: string
}

interface SwapInputProps {
  direction: 'From' | 'To'
  balance?: number
  onChange?: (value: SwapInputData) => void
}
