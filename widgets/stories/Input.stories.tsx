import React from 'react'
import styled from 'styled-components'
import { Input } from '../src'
import Book from '../src/Page'
import { ReactComponent as SeachIcon } from '../src/assets/search.svg'

const StyledInput = styled(Input)`
  width: 80%;
  border-radius: 0;
`

export const TypeCompatibility = () => (
  <Book style={{ background: '#fff' }} >
    <label>手机号：<Input type='tel' placeholder='请输入手机号' /></label>
    <label>手机号：<StyledInput type='tel' suffix='china' placeholder='请输入手机号' /></label>
    <label>手机号：<Input type='tel' placeholder='请输入手机号' /></label>
  </Book>
)

export const PrefixSuffix = () => (
  <Book style={{ background: '#fff' }} >
    <label>手机号：<Input type='tel' prefix='+86' placeholder='请输入手机号' /></label>
    <label>手机号：<Input type='tel' prefix='+86' suffix='china' placeholder='请输入手机号' /></label>
    <label>手机号：<StyledInput type='tel' prefix='+86' suffix='china' placeholder='请输入手机号' /></label>
    <label>
      手机号：<Input type='tel' suffix={<SeachIcon />} placeholder='请输入手机号' />
    </label>
  </Book>
)

export const ValidityEffects = () => (
  <Book style={{ background: '#fff' }} >
    <label>手机号： <Input type='tel' placeholder='必填' required /></label>
    <label>
      手机号： <Input type='tel' prefix='+86' placeholder='最长11位' maxLength={11} required />
    </label>
  </Book>
)

export const ListAttribute = () => (
  <Book>
    <label>邮箱：<Input type='email' placeholder='请输入邮箱' list='email-options' /></label>
    <datalist id='email-options'>
      <option>yuquanwang1990@icloud.com</option>
      <option>yuquanwang1990@163.com</option>
    </datalist>
  </Book>
)

export const NumberInput = () => (
  <Book>
    <label>
      数字：<Input type='number' min={5} max={50000} step={5} placeholder='5的倍数' />
    </label>
    <label>
      数字：<Input type='number' min={0.1} max={1} step={0.1} placeholder='小数' />
    </label>
    <label>
      数字：<Input type='number' list='number-options' placeholder='列表选择' />
    </label>
    <datalist id='number-options'>
      <option>20</option>
      <option>30</option>
    </datalist>
  </Book>
)

export const BlockIllegalInput = () => (
  <Book>
    <label>
      劫持非法输入：
      <Input placeholder='请输入身份证号'
        pattern={/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/}
        example='362427199008203117' />
    </label>
  </Book>
)

export default { title: 'Input' }