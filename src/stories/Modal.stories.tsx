import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Modal from '../components/Modal'
import ModalConfirm from '../components/ModalConfirm'
import ModalNotice from '../components/ModalNotice'

import Book from '../components/Page'

const stories = storiesOf('Modal', module)

stories.add('image modal', () => (
  <Book>
    <Modal
      type={select('type', { image: 'image', component: 'component' }, 'image')}
      shown={boolean('show up', true)}
      closable={boolean('closable', false)} />
  </Book>
))



const onCancel = () => {
    console.log('cancel')
}
const onConfirm = () => {
    console.log('confirm')
}
stories.add('modal confirm', () => (
    <Book>
        <ModalConfirm onCancel={ onCancel } onConfirm={onConfirm} />
    </Book>
))

stories.add('modal 订单提交成功', () => (
    <Book>
        <ModalNotice onCancel={ onCancel } onConfirm={onConfirm} />
    </Book>
))