import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { cover } from 'polished'
import Book from '../components/Page'
import Nail from '../components/Nail'
// import { ReactComponent as IconActivate } from '../assets/activate.svg'

const stories = storiesOf('Nail', module)

const StyledBackground = styled.div`
  ${cover()}
  background: #fff;
`

stories.add('normal nail', () => (
  <Book>
    {/*<StyledBackground><Nail lead={<IconActivate />} /></StyledBackground>*/}
  </Book>
))