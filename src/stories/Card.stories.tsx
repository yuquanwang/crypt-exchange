import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../components/Card'
import Book from '../components/Page'

const stories = storiesOf('Card', module)

stories.add('card', () => (
  <Book>
    <Card >慈善活动信息</Card>
  </Book>
))