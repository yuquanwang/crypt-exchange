import React from 'react'
import { Toast } from '../src'
import Book from '../src/Page'

export const DefaultToast = () => (<Book><Toast>请输入正确的医保卡号</Toast></Book>)

export const LoadingToast = () => (<Book><Toast type="loading">加载中</Toast></Book>)

export const SuccessToast = () => (<Book><Toast type="success">操作成功</Toast></Book>)

export default { title: 'Toast' }

