import React from 'react'
import { Link } from 'react-router-dom'
import src403 from '../assets/403.png'
import Button from '../components/Button'
import { Exception } from './style'

export default () => (
  <Exception>
    <img src={src403} alt='加载失败' />
    <span>您未获得相关权限！</span>
    <span>如未关注公众号，请先关注后再进入！</span>
    <Button><Link to='/'>回到首页</Link></Button>
  </Exception>
)
