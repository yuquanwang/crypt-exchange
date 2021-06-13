import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Book from '../components/Page'
import Text from '../components/Text'
const stories = storiesOf('Text', module)

const WhiteBook = styled(Book)`
  background: #fff;
  &>div {
    margin: 1rem 1.5rem;
  }
`


//
// stories.add('¥9999.0', () => (
//     <Book>
//         <Text layout="price">9999</Text>
//     </Book>
// ))
//
// stories.add('英国进口', () => (
//     <Book>
//         <Text layout="blueCycle">9999</Text>
//     </Book>
// ))
// stories.add('title1', () => (
//     <Book>
//         <Text layout="title1">替诺福韦</Text>
//     </Book>
// ))

stories.add('例子', () => (
    <Book>
        <Text layout="blueCycle">英国进口</Text>
        <Text layout="price">9999</Text>
        <Text layout="title">替诺福韦</Text>
        <Text layout="title_sub">1毫克x14片</Text>
        <Text layout="title_sub">阿斯利康制药有限公司</Text>
        <div>
            <Text layout="title_hook">医保报销</Text>
            <Text layout="title_hook">货到付款</Text>
            <Text layout="title_hook">上门自提</Text>
        </div>

    </Book>
))
// stories.add('title_hook', () => (
//     <Book>
//         <Text layout="title_hook">医保报销</Text>
//     </Book>
// ))

