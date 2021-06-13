import {
  ApiTwoTone, TrademarkCircleTwoTone, UserOutlined, WalletTwoTone, MenuFoldOutlined
} from '@ant-design/icons'
import { Avatar, Collapse, Layout } from 'antd'
import React, { ReactNode, useState, MouseEvent } from 'react'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  >aside {
    height: 100vh;
    padding-top: 48px;
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
    console.log('e: ', e)
    !collapsed && e.stopPropagation()
  }

  return (
    <>
      <div onClick={handleClick}><Avatar size="large" icon={<UserOutlined />} />{!collapsed && <span>John Leider</span>}</div>
      {!collapsed && <MenuFoldOutlined />}
    </>
  )
}

export default function HomePage() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <StyledLayout>
      <Layout.Sider
        theme="light" collapsible collapsed={collapsed} trigger={<Trigger collapsed={collapsed} />} width={400}
        onCollapse={toggleCollapsed} >
        <Collapse bordered expandIconPosition="right">
          <Collapse.Panel header={<CollapseHead title="资产" icon={<WalletTwoTone />} collapsed={collapsed} />} key="1">
          </Collapse.Panel>
          <Collapse.Panel header={<CollapseHead title="订单" icon={<TrademarkCircleTwoTone />} collapsed={collapsed} />} key="2">
          </Collapse.Panel>
          <Collapse.Panel header={<CollapseHead title="AppKey" icon={<ApiTwoTone />} collapsed={collapsed} />} key="3">
          </Collapse.Panel>
        </Collapse>
      </Layout.Sider>
      <Layout.Content>
        content
      </Layout.Content>
    </StyledLayout>)
}