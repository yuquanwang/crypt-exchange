import React from 'react'
import { Link } from 'react-router-dom'
import src403 from '../assets/403.png'
import Button from '../components/Button'
import { Exception } from './style'

export default () => (
    <Exception>
        <img src={src403} alt='后端报错' />
        <span>后端服务器错误</span>
        <span>请稍等</span>
        <Button><Link to='/'>回到首页</Link></Button>
    </Exception>
)
