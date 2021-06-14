import React, { useState } from 'react'
import styled from 'styled-components'
import { cover, lighten } from 'polished'
import Book from '../components/Page'
import Label from '../components/Label'
import Input from '../components/Input'
import Picker from '../components/Picker'
import { RadioGroup } from '../components/Radio'
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as IconPrescript } from '../assets/prescript.svg'

const StyledBackground = styled.div`
  ${cover()}
  background: #fff;
`
const radioOptions = [
  { label: "男", value: "man" },
  { label: "女", value: "women" },
]
const items = ['本人', '父母', '爱人', '子女', '其他']

export const FieldsForm = () => {
  const [person, setPerson] = useState()
  const [flag, setFlag] = useState(false)
  const handleConfirm = (res: (string | number)[]) => {
    // const selcetPerson = res[0]
    // setPerson(selcetPerson)
    // setFlag(false)
  }
  const handleClick = () => {
    setFlag(true)
  }
  return (
    <Book>
      <StyledBackground>
        <Label field="姓名">讲方言</Label>
        <Label field="性别">
          <RadioGroup radioOptions={radioOptions}></RadioGroup>
        </Label>
        <Label field="身份证号码">
          <Input placeholder="请输入你的身份证号码" layout="none" re={/\w/} />
        </Label>
        <Label field="你与患者的关系">
          <span onClick={handleClick}>
            <span>{!person ? '请选择' : null}</span>
            {person}
            <span>{'>'}</span>
          </span>
          <Picker visible={flag} data={items} title="请选择你与患者的关系" onConfirm={handleConfirm}></Picker>
        </Label>
      </StyledBackground>
    </Book>
  )
}

const StyledLabel = styled(Label)`
`

const Icon = styled(IconPrescript)`
  fill: ${lighten(0.6, '#000')};
`

export const NaviLabel = () => (
  <Book style={{ background: '#fff' }}>
    <StyledLabel icon={<Icon />} output field='处方' to='/prescription'></StyledLabel>
    <StyledLabel field='处方' output to='/prescription'></StyledLabel>
  </Book>
)

export default { title: 'Label' }


