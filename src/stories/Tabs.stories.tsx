import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Book from '../components/Page'
import Tabs, { Tab, TagTabs } from '../components/Tabs'

const stories = storiesOf('Tabs', module)

stories.add('tab show icon and label', () => (
  <Book>
    <Tab
      label={text('label', 'home')}
      // @ts-ignore
      icon={text('icon', 'home')}
      active={boolean('active', false)} />
    <Tab label={text('label', 'home')}
      // @ts-ignore
      icon={text('icon', 'home')}
      active={boolean('active', false)} />
  </Book>
))

stories.add('tabs', () => (
  <Book>
    {
        <Tabs tabs={[ {
            label: '壹树', icon: 'home' },
            { label: '购药', icon: 'kit' },
            { label: '我的', icon: 'ball' }]} activeTab={0}
              onChange={() => {

              }} >
            <div key={2}>2</div>
            <div key={0}>0</div>
            <div key={1}>1</div>
        </Tabs>

    }
  </Book>
))

// 使用Tags展示子项
stories.add('tag tabs at top', () => (
  <Book>
    {<TagTabs tabs={[
      { label: '壹树', icon: 'home' }, { label: '购药', icon: 'kit' }, { label: '我的', icon: 'ball' },
      { label: '壹树', icon: 'home' }, { label: '购药', icon: 'kit' }, { label: '我的', icon: 'ball' },
      { label: '壹树', icon: 'home' }, { label: '购药', icon: 'kit' }, { label: '我的', icon: 'ball' },
    ]} activeTab={0}>

    </TagTabs>}
  </Book>
))