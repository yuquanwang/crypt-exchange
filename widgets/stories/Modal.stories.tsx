import { boolean, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { Modal } from '../src'
import Book from '../src/Page'

export const ContentModal = () => (
  <Book>
    <Modal visible={boolean('show up', true)} closable={boolean('closable', false)}>
      Content
    </Modal>
  </Book>
)

export const ConfirmableModal = () => (
  <Book>
    <Modal visible={boolean('show up', true)} onConfirm={() => { }}>
      Content
    </Modal>
  </Book>
)

export default { title: 'Modal', decorators: [withKnobs] }