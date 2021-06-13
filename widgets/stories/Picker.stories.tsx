import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { Picker } from '../src'
import Book from '../src/Page'

const items = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

const numbers = [
  {
    id: 1, name: 1, children: [
      { id: 11, name: 11 },
      { id: 12, name: 12 },
      { id: 13, name: 13 },
      { id: 14, name: 14 },
      { id: 15, name: 15 },
      { id: 16, name: 16 },
      { id: 17, name: 17 },
      { id: 18, name: 18 },
      { id: 19, name: 19 },
    ]
  },
  {
    id: 2, name: 2, children: [
      { id: 21, name: 21 },
      { id: 22, name: 22 },
    ]
  }
]

const handleConfirm = (res: (string | number)[]) => {
  alert(`res: ${res}`)
}

export const PickerWrapper = () => (
  <Book>
    <Picker
      visible={boolean('visible', true)}
      data={items}
      title={text('title', '选择器')}
      onConfirm={() => { }} />
  </Book>
)

export const Scroller = () => (
  <Book>
    <Picker
      visible={boolean('visible', true)}
      data={items}
      title={text('title', '选择器')}
      onConfirm={() => { }} />
  </Book>
)

export const Columns = () => (
  <Book>
    <Picker
      visible={boolean('visible', true)}
      columns={2} data={numbers}
      title={text('title', '选择器')}
      onConfirm={() => { }} />
  </Book>
)

export const ConfirmEvent = () => (
  <Book>
    <Picker
      visible={boolean('visible', true)}
      columns={2} data={numbers}
      title={text('title', '选择器')}
      onConfirm={handleConfirm} />
  </Book>
)

export default { title: 'Picker', decorators: [withKnobs] }
