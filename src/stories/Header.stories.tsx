import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../components/Header'
import Book from '../components/Page'

const stories = storiesOf('Header', module)

stories.add('primary header', () => (
  <Book>
    <Header primary></Header>
  </Book>
))

stories.add('normal header', () => (
  <Book>
    <Header></Header>
  </Book>
))