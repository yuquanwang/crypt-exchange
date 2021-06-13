import React from 'react'
import { storiesOf } from '@storybook/react'
import Mask from '../components/Mask'
import Book from '../components/Page'

const stories = storiesOf('Page', module)

stories.add('Page should cover whole screen', () => <Book><Mask /></Book>)
