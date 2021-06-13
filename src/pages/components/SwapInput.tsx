import { Avatar, Input, List, Modal, Select } from 'antd'
import React, { MouseEvent, useState } from 'react'
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
`

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme['@padding-md']}px;
  padding-bottom: 0;
`

const Amount = styled.div`
  display: flex;
  padding: ${({ theme }) => theme['@padding-md']}px;
  .ant-input {
    width: -webkit-fill-available;
    background: transparent;
    border: none;
    padding: 0;
  }
  .ant-input:focus, .ant-input-focused {
    box-shadow: none;
  }
  .ant-select-selector {
    pointer-events: none;
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
      :hover {
        background: ${({ theme }) => theme['@descriptions-bg']};
      }
    }
  }
`

export default function SwapInput() {
  const [selecting, setSelecting] = useState(false)

  const handleClickSelect = (e: MouseEvent) => {
    setSelecting(true)
  }

  const handleCancel = () => {
    setSelecting(false)
  }

  return (
    <Wrap>
      <Balance><span>From</span><span>Balance: 0.00910143</span></Balance>
      <Amount>
        <Input placeholder="0.0" />
        <Select defaultValue="lucy" onClick={handleClickSelect}></Select>
      </Amount>
      <Selection title="Select a token" visible={selecting} footer={null} onCancel={handleCancel}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
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
