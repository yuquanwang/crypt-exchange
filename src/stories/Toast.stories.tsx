import React from 'react'
import { storiesOf } from '@storybook/react'
import Toast from '../components/Toast'
import Book from '../components/Page'


const stories = storiesOf('Toast', module)

stories.add('content toast', () => (<Book><Toast>请输入正确的医保卡号</Toast></Book>))
stories.add('loading toast', () => (<Book><Toast type="loading">加载中</Toast></Book>))
stories.add('success toast', () => (<Book><Toast type="success">操作成功</Toast></Book>))

