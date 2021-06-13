import React from 'react'
import { cover } from 'polished'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Book from '../components/Page'
import { RadioGroup } from '../components/Radio'

const stories = storiesOf('RadioGroup', module)

const Background = styled.div`
  ${cover()}
  background: white;
`

const radioOptions = [
  { label: "男", value: "man" },
  { label: "女", value: "women" },
  { label: "不男不女", value: "no man no women" },
]

stories.add('radio group', () => (
  <Book>
    <Background>
      <RadioGroup radioOptions={radioOptions} />
    </Background>
  </Book>))