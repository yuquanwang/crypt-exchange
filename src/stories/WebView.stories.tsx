import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import styled from 'styled-components'
import WebView from '../components/WebView'

const stories = storiesOf('WebView', module)

stories.add('default', () => (
  <WebView src="https://baidu.com">立即续方</WebView>
))

stories.add('set height', () => (
  <WebView src="https://baidu.com" height={number('height', 400)}>立即续方</WebView>
))

const StyledWebView = styled(WebView)`
  height: 200px;
`

stories.add('styled iframe', () => (
  <StyledWebView src="https://baidu.com">立即续方</StyledWebView>
))