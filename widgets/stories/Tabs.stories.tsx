
import { lighten } from 'polished'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Tabs } from '../src'
import Book from '../src/Page'

const tabs = ['first', 'second', 'third']

const first = new Array(25)
const second = new Array(20)
const third = new Array(30)

first.fill(tabs[0])
second.fill(tabs[1])
third.fill(tabs[2])

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${lighten(0.2, '#000')};
  padding: 0;
  :hover, active {
    border: none;
    background: transparent;
  }
`

const Ul = styled.ul`
  li { 
    text-align: center;
    height: 60px;
  }
`

function WithoutChildren() {
  const [index, setIndex] = useState(0)
  const handleSwitchTab = (i: number) => {
    setIndex(i)
  }

  return (
    <Book>测试透明度
      <Tabs tabs={tabs.map((tab, i) => (
        <Button key={tab} onClick={() => handleSwitchTab(i)}>{tab}</Button>))} index={index}>
      </Tabs>
    </Book>)
}

export const TabsWithoutChildren = () => (
  <WithoutChildren />
)

function WithChildren() {
  const [index, setIndex] = useState(0)
  const handleSwitchTab = (i: number) => {
    setIndex(i)
  }

  return (
    <Book>测试透明度
      <Tabs tabs={tabs.map((tab, i) => (
        <Button key={tab} onClick={() => handleSwitchTab(i)}>{tab}</Button>))} index={index}>
        {tabs.map((tab, i) => (
          <Ul key={tab}>
            {i === 0 && first.map((tab, index) => (<li key={tab + index}>{tab}</li>))}
            {i === 1 && second.map((tab, index) => (<li key={tab + index}>{tab}</li>))}
            {i === 2 && third.map((tab, index) => (<li key={tab + index}>{tab}</li>))}
          </Ul>
        ))}
      </Tabs>
    </Book>)
}

export const TabsWithChildren = () => (
  <WithChildren />
)

export default { title: 'Tabs' }