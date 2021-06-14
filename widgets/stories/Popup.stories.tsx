import { boolean, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { Popup } from '../src'
import Book from '../src/Page'

const Sample = () => {
  const visible = boolean('visible', true)
  const handleClose = () => { }

  return (
    <Book>
      <Popup title='sample' visible={visible} onClose={handleClose}>
        <p>popup content</p>
      </Popup>
    </Book>
  )
}

export const PopupSample = () => (
  <Sample />
)

export default { title: 'Popup', decorators: [withKnobs] }