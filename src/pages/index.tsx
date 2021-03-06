import {
  ApiTwoTone, ArrowDownOutlined, CheckCircleOutlined, FacebookOutlined, LinkedinOutlined, MenuFoldOutlined, SoundTwoTone, SwapRightOutlined, TrademarkCircleTwoTone, TwitterOutlined, UserOutlined, WalletTwoTone, YoutubeOutlined
} from '@ant-design/icons'
import { Avatar, Button, Card, Collapse, Comment, Layout, List, Radio, Tag } from 'antd'
import moment from 'moment'
import React, { MouseEvent, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import CandlestickChart from './components/CandlestickChart'
import SwapInput from './components/SwapInput'

const StyledLayout = styled(Layout)`
  >aside {
    height: 100vh;
    padding-top: 48px;
    box-shadow: ${({ theme }) => theme['@card-shadow']};
    z-index: ${({ theme }) => theme['@zindex-affix']};
  }
  .ant-layout-sider-trigger {
    top: 0;
    bottom: auto;
    display: flex;
    align-items: center;
    padding: 0 ${({ theme }) => theme['@padding-md']}px;
    .ant-avatar {
      margin-right: ${({ theme }) => theme['@padding-md']}px;
    }

    >div {
      width: -webkit-fill-available;
      text-align: left;
    }
  }
`

const StyledCollapse = styled(Collapse)`
  .ant-collapse-item-active {
    box-shadow: ${({ theme }) => theme['@card-shadow']};
    margin-bottom: 1em;
  }
`

const Head = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme["@font-size-base"] + 2}px;
  font-weight: ${({ theme }) => theme['@typography-title-font-weight']};
  svg {
    width: 1.2em;
    height: 1.2em;
  }
  >div {
    width: -webkit-fill-available;
    text-align: center;
  }
`

const StyledComment = styled(Comment)`
  .ant-comment-avatar {
    font-size: 1.2em;
  }
`

function CollapseHead(props: { collapsed: boolean, icon: ReactNode, title: string }) {
  const { icon, title, collapsed } = props

  return (
    <Head>
      {icon}
      {!collapsed && <div>{title}</div>}
    </Head>)
}

function Trigger(props: { collapsed: boolean }) {
  const { collapsed } = props

  const handleClick = (e: MouseEvent) => {
    !collapsed && e.stopPropagation()
  }

  return (
    <>
      <div onClick={handleClick}><Avatar size="large" icon={<UserOutlined />} />{!collapsed && <span>John Leider</span>}</div>
      {!collapsed && <MenuFoldOutlined />}
    </>
  )
}

const Swap = styled(Button)`
  margin-top: 1em;
  width: 100%;
`

const SwapCard = styled(Card)`
  box-shadow: ${({ theme }) => theme['@card-shadow']};
  width: 100%;
  max-width: 436px;
  margin: ${({ theme }) => theme['@margin-md']}px auto;
  text-align: center;
  .ant-card-body > .ant-radio-group {
    text-align: left;
    margin-bottom: ${({ theme }) => theme['@margin-sm']}px;
    .ant-radio-wrapper {
      margin-bottom: ${({ theme }) => theme['@margin-xss']}px;
    }
  }
  .anticon-arrow-down {
    color: ${({ theme }) => theme['@primary-color']};
  }
`

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

const TradeTime = styled.span`
  font-size: ${({ theme }) => theme['@font-size-sm']}px;
  margin-left: ${({ theme }) => theme['@margin-xss']}px;
`

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedKeys, setExpandedKeys] = useState<string | string[]>([])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const handleCollapsePanelChange = (keys: string | string[]) => {
    setExpandedKeys(keys)
    setCollapsed(false)
  }

  useEffect(() => {
    collapsed && setExpandedKeys([])
  }, [collapsed])

  return (
    <StyledLayout>
      <Layout.Sider
        theme="light" collapsible collapsed={collapsed} width={400} breakpoint="lg"
        trigger={<Trigger collapsed={collapsed} />}
        onCollapse={toggleCollapsed} >
        <StyledCollapse bordered expandIconPosition="right" activeKey={expandedKeys} onChange={handleCollapsePanelChange}>
          <Collapse.Panel key="1"
            header={<CollapseHead title="??????" icon={<WalletTwoTone />} collapsed={collapsed} />} >
            <Tag icon={<TwitterOutlined />} color="#55acee">
              Twitter
            </Tag>
            <Tag icon={<YoutubeOutlined />} color="#cd201f">
              Youtube
            </Tag>
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee">
              LinkedIn
            </Tag>
          </Collapse.Panel>
          <Collapse.Panel key="2"
            header={<CollapseHead title="??????" icon={<TrademarkCircleTwoTone />} collapsed={collapsed} />} >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Avatar />
                  <TradeTime>{moment().format('YYYY-MM-DD HH:mm:ss')}</TradeTime>
                  <Tag icon={<LinkedinOutlined />} color="#55acee">LinkedIn</Tag>
                  <SwapRightOutlined />
                  <Tag icon={<LinkedinOutlined />} color="#55acee">LinkedIn</Tag>
                  <CheckCircleOutlined />
                </List.Item>
              )}
            />
          </Collapse.Panel>
          <Collapse.Panel key="3"
            header={<CollapseHead title="AppKey" icon={<ApiTwoTone />} collapsed={collapsed} />}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={'fmz'}
                    description="fjiojwrogj3oi***ewori"
                  />
                </List.Item>
              )}
            />
          </Collapse.Panel>
        </StyledCollapse>
      </Layout.Sider>
      <Layout.Content>
        <Card><CandlestickChart /></Card>
        <Card title="?????????">
          <StyledComment
            actions={[<Tag.CheckableTag checked>BNB</Tag.CheckableTag>, <Tag.CheckableTag checked={false}>MDX</Tag.CheckableTag>]}
            avatar={<SoundTwoTone />}
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
            datetime={<span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>}
          />
        </Card>
        <SwapCard title="??????">
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}><Avatar /> Binance</Radio>
            <Radio value={2}><Avatar /> Huobi global</Radio>
            <Radio value={3}><Avatar /> Gate.io</Radio>
          </Radio.Group>
          <SwapInput direction='From' balance={0.00910} />
          <ArrowDownOutlined />
          <SwapInput direction='To' />
          <Swap type="primary" >Swap</Swap>
        </SwapCard>
      </Layout.Content>
    </StyledLayout>)
}
