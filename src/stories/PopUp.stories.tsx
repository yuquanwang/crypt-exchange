import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import PopUp from '../components/PopUp'
import Book from '../components/Page'

const stories = storiesOf('PopUp', module)

stories.add('pop up', () => (
  <Book><PopUp visible={boolean('visible', true)} onClose={() => { console.log('close') }} /></Book>
))
