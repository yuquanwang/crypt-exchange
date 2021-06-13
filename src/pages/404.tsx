
import React from 'react'
import { Link } from 'react-router-dom'
import src404 from '../assets/404.png'
import Button from '../components/Button'
import { Exception } from './style'

export default () => (
  <Exception>
    <img src={src404} alt='加载失败' />
    <span>您所访问的页面不存在！</span>
    <Button><Link to='/'>回到首页</Link></Button>
  </Exception>
)
