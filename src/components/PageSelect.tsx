import { lighten } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'
import { theme, DEFAULTCITY, COPYWORK } from '../config'
import { WhitePage, BottomBar, DivSpaceBetween, H2, H4 } from "../pages/style"
import Radio from "./Radio"
import Button from "./Button"

const LiFlexStart = styled.li`
  display:flex;
  padding:1rem 0;
  label {
    margin-top: 0.1rem;
  }
`
const DivSpaceBetweenDixed = styled(DivSpaceBetween)`
  position: fixed;
  left: 0;
  right: 0;
  background-color: white;
  padding: 2rem 2.8rem 1rem;
  top: 0;
`
const StyledUl = styled.ul`
  padding: 5rem 2rem 0;
  background-color: white;
  margin: 0 0 8rem;
`

const PageSelect = (props: PageSelectProps) => {
  const { value, onChange, title = '请选择', data = [],
    idKey = 'id', itemTitleKey = 'name', infoKey = 'address' } = props

  return (
    <>
      <DivSpaceBetweenDixed>
        <H2>{title}</H2>
        <H4>成都市</H4>
      </DivSpaceBetweenDixed>
      <StyledUl>
        {data.map((item, index) => (
          <LiFlexStart key={item[idKey]}>
            <Radio label='' value='man' checked={item[idKey] === value}
              onClick={() => onChange(item)} iconWidth={1.9} />
            <div>
              <div style={{ marginBottom: '0.5rem' }}>
                {item[itemTitleKey]}
              </div>
              <H4>
                {item[infoKey]}
              </H4>
            </div>
          </LiFlexStart>
        ))}
      </StyledUl>
    </>
  )
}
interface PageSelectProps {
  value?: string | number
  onChange: (item: any) => void
  data: any[]
  title?: string
  idKey?: string | number
  itemTitleKey?: string
  infoKey?: string
}

export default PageSelect