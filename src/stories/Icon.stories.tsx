import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../components/Icon'
import Book from '../components/Page'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Icon', module)

stories.add('show normal icon', () => (
  <Book>
    {
      // @ts-ignore
      <Icon type={text('type', 'home')} fill={text('color', 'red')} />
    }
    {
      // @ts-ignore
      <Icon type={text('type', 'home')} fill={text('color', 'red')} />
    }
  </Book>
))