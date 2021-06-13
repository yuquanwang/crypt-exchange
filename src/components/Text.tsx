import styled from "styled-components"
import React, { ClassAttributes } from "react"
import {ReactComponent as CheckedIcon} from "../assets/circle.svg"
import {theme} from "../config"
import { ReactComponent as CheckCircel } from '../assets/check_circel.svg'
import Icon, {IconType} from "./Icon"

interface TextProps extends ClassAttributes<HTMLLabelElement> {
    layout?: string
}
const TextTitleSub = styled.div`
  color: #999999FF;
  font-size: 0.9em;
  line-height:1.65em;
  font-weight: 400;
 
`

// @ts-ignore
const Text = styled(TextTitleSub)<TextProps>`
 ${props => props.layout === "blueCycle"  && `
    display:inline-flex;  padding:0 1.1em;
    color: rgb(77, 155, 255);
    line-height:2.3em;
    background:rgba(77,155,255,0.05);
    border-radius:32px;
    position: absolute;
    right: 0.8em;
    top: 1.2em;
 `}
  ${props => props.layout === "price"  && `
    color: #FF6158;
    margin-left:0.24em;
    font-size: 1.7em;
    &:before {
        content: '¥';
        position: relative;
        left: -0.14em;
        font-size: 0.8em;
    }
  ` }
  ${props => props.layout === "titleSub"  && `
      font-size: 0.9em;
  ` }
  
  ${props => props.layout === "title"  && `
      font-size: 1.3em;
      line-height:1.9em;
      color:black;
  `}

  ${props => props.layout === "title_hook"  && `
    &:before {
        content: '¥';
        position: relative;
        left: -0.3em;
        bottom: -0.1em;
        font-size: 0.8em;
    }
  `}
`

interface TextWithIconProps {
  name: string
  iconType?:IconType
}
export const TextWithIcon = (props: TextWithIconProps) => {

const Span = styled.span`
    color:#999999;
    font-size: 1.2rem;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    .cls-1, .cls-2, .cls-4 {
        fill: #12CD9F;
    }
    .text{
        padding:0 0.5em 0 0.3em;
    }
    svg{
        fill:#12CD9F;
    }
`

 return (
     <Span>
      <CheckCircel></CheckCircel>
      <span className='text'>{props.name}</span>
     </Span>
 )
}
export default Text

