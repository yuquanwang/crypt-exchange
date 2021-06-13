import {
  Input as InputWidget, Card as CardWidget, Page as PageWidget,
} from '@medtree/widgets'
import { lighten, em, cover } from 'polished'
import styled, { css } from 'styled-components'
import ComponentCard from '../components/Card'
import Header from '../components/Header'
import { Page } from '../components/Page'
import { BottomTabBar } from '../components/Tabs'
import { shadow } from '../GlobalStyle'
import Button from "../components/Button"

export const Input = styled(InputWidget) <{ ghost?: boolean }>`
  background: ${props => props.theme.colors.background};
  width: 100%;
  font-size: 1.45rem;
  height:3.05em;

  input {
    background: ${props => props.theme.colors.background};
    border: none;
    padding: 1em;
    line-height: 1;
  }
  ${props => props.ghost && css`
    background: transparent;
    border: none;
    display: inline;
    input {
      background: transparent;
      padding: 0;
    }
  `}
`

// 统一的卡片 padding 20 15 marign: 10 0  font base 16px;
// @ts-ignore
export const Card = styled(CardWidget)`
  padding: ${em(20)} ${em(15)};
  margin: ${em(10)} 0;
`

// 纯展示功能的圆角tag标签
export const RoundTag = styled.i`
  border-radius: 3em;
  font-style: normal;
  padding: 0.2em 0.8em;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  margin-right: ${em(10)};
  vertical-align: middle;
`

export const StyledSubmit = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid ${props => props.theme.colors.background};
  padding: 1rem 2rem;
`

// 卡片页面，内部基本上全是卡片，margin: 10 15， font base 16px; 有吸底拦则传入bottomBar
export const PageforCards = styled(PageWidget) <{ bottomBar?: boolean }>`
  &>div {
    margin: ${em(10)} ${em(15)} ${props => props.bottomBar ? em(74) : em(10)} ${em(15)};
  }
`

// 字段展示页面，内部平铺字段，margin: 0，font base 16px; 有吸底拦则传入bottomBar
export const PageforFields = styled(PageWidget) <{ bottomBar?: boolean }>`
  &>div {
    margin: 0;
    ${props => props.bottomBar && css`
      margin-bottom: ${em(74)};
    `}
  }
`

export const WhitePage = styled(Page)`
  background: #fff;
  .myWrapper{
    padding:1rem 0.3rem 1.4rem 0.1rem;
    border-bottom:0;
  }
   &>div {
        margin:0rem;
   }
`

export const GrayPage = styled(Page)`
  background: #F5F5F5;
  &>div {
      margin: 1em;
  }
`
export const TabBar = styled(BottomTabBar)`
  label {
    justify-content: flex-end;
  }
  span {
    margin-top: 4.5px;
  }
`

export const HomePage = styled(Page)`
  &>div {
    margin: 3rem 1.5rem;
    margin-bottom: 4em;
    &>section:first-of-type {
      margin-top: 11.5rem;
    }
  }
`

export const StyledHeader = styled(Header)`
  font-size: ${props => props.theme.size.text + 0.8}rem;
  margin: 3rem 1.5rem;
  img {
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    border-radius: 6rem;
    cursor: pointer;
    pointer-events: auto;
  }
  &>div {
    display: flex;
  }
`

export const NotifyCard = styled(ComponentCard)`
  padding: 0;
  background: ${props => props.theme.colors.background};
`

export const ReminderCard = styled(ComponentCard)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: ${props => props.theme.size.text + 0.2}rem;
    var, q>span {
      color: ${props => props.theme.colors.primary};
    }
    var {
      font-style: normal;
      margin: 0 4px;
    }
  }
  span {
    font-size: ${props => props.theme.size.text - 0.2}rem;
  }
  svg {
    margin: 0;
    width: 9.5rem;
    height: 9.5rem;
  }
`

export const CountDown = styled(ComponentCard)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 10.6rem;
  height: 5rem;
  background: ${props => props.theme.colors.background};
  padding: 0.5rem;
  margin: 0;
  color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  div {
    display: inline-block;
    width: 3.5rem;
    height: 4rem;
    background: #fff;
    text-align: center;
    line-height: 4rem;
    font-weight: bold;
    font-size: 2.7rem;
  }
  span {
    display: inline-block;
    width: 5.6rem;
    font-size: ${props => props.theme.size.text - 0.2}rem;
  }
`

export const Notification = styled.div`
  position: relative;
  height: 2rem;
  line-height: 2rem;
  top: 1rem;
  margin: 2rem 1.5rem;
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.size.text - 0.2}rem;
  img {
    width: 1em;
    height: 1em;
    margin-right: 1rem;
    vertical-align: middle;
  }
`
// @ts-ignore
export const Grid = styled(ComponentCard)`
  padding: 1.5rem;
  h2 {
      margin: 0.5rem 0;
      font-weight: normal;
    }
  &>div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
`

export const Feature = styled(ComponentCard)`
  background: white;
  cursor: pointer;
  min-width: 15.25rem;
  height: 6.4rem;
  padding: 1rem 0.8rem 1rem 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  
  &>div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    color: ${lighten(0.2, '#000')};
    span {
      font-weight:430;
      :last-child {
        font-size: ${props => props.theme.size.text - 0.4}rem;
        color: ${lighten(0.6, '#000')};
      }
    }
  }
  svg {
    width: 4.4rem;
    height: 4.4rem;
    margin: 0;
  }
`

export const Leading = styled.div`
  display: flex;
  &::before {
    display: inline-block;
    content: '';
    background: ${props => props.theme.colors.primary};
    height: 0.9em;
    width: 1px;
    margin-right: ${props => props.theme.size.text / 2}rem;
    border-radius: 3px;
    box-shadow: ${shadow};
    align-self: center;
  }
`

//药品分类页的title
export const SectionTitle = styled.div`
  font-size: ${props => props.theme.size.text + 0.6}rem;
  font-weight: bold;
`
//药品分类页的title
export const SectionContainer = styled.div`
    margin:0 0 1em 0;
    display: flex;
    flex-wrap: wrap;
    padding:0 0 0 0;
    justify-content: flex-start;
    button {
        margin:0.7em 0.7em 0 0;
        width:auto;
    }
    div{
        margin: 1em 1em 0em 0em;
    }
   
`

export const DivSpaceBetween = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#333;
`
export const IconWithLabel = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    color:gray;
    font-size:0.8em;
    flex-grow:1; 
    padding-top:0.5em;
    &>svg{
     fill:gray;
    }
`

export const Divider = styled.div`
    padding:12px 6px 0px 6px;
    margin-left: 1px;
    border-left: 1px solid ${props => props.color || '#000'};
    font-size: 0;
`

export const DivCenter = styled.div`
        display: flex;
        justify-content: center; 
        align-items: center;   
        text-align:center;
        font-size: 1.5em;
        font-weight:bold;
        height: 16em;
        
        .inner {
            label{
                display:block;
                margin-top:1em;
                color:#12CD9F;
                font-size:0.9em;
            }
        }
`
export const DivEmptyView = styled.div`
        display: flex;
        justify-content: center; 
        align-items: center;   
        text-align:center;
        font-weight:bold;
        height: 7em;
        font-size:1.2em;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
`
export const BottomTextLine = styled.div`
    position: relative;
    text-align: center;
    color: #999;
    font-size: 1.4rem;
    margin: 40px;
    &:before{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      height: 0.5px;
      background-color: #ccc;
    }
    &:after{
      content:"我是有底线的";
      color: #999;
        position: relative;
      padding: 10px;
      z-index: 3;
      background-color: whitesmoke;
    }
`

const cssBottomBigGreen = `
    font-weight: bold;
    font-size: 1em;
    line-height: 2.8em;
    height: 2.8em;
    padding: 0 2.5em;
    border-radius: 2.5em;
    flex-grow:2;
`
//这里是最下面的那个大按钮的所在的bar 白色背景
export const BottomBar = styled.div`
    background-color:white;
    padding:1em;
    display: flex;
    position: fixed;
    padding: 0.7em;
    right: 0em;
    bottom: 0em;
    width: 100%;
    
    overflow: hidden;
    display: inline-flex;
    border-top: 1px solid rgba(245,245,245,1);
    
    input[type=file] {
        width:100%;
        height:4em;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
`

//底部超大的绿色按钮
export const ButtonBig = styled(Button)`
    ${cssBottomBigGreen}
    width:100%;
`

export const GreenSpan = styled.span`
    color: #12CD9F;
    padding: 0.05em 0.7em;
    border: 0.1em solid #12CD9F;
    border-radius: 2em;
    font-size: 0.80em;
    margin:0em 1em;
`
export const DivMedican = styled(ComponentCard)`
    section{
       line-height:1.9em;
    }
    span.title {
        color:#333333;
        font-weight:400;
    }
    label{
        color:#666666;
        font-size: 0.97em;
        margin-right:0.3em;
    }
`
export const H0 = styled.div`
    font-size: 2.4rem;
    font-weight: 500;
    color: #333333;
    line-height: 1.3;
`
export const H1 = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    color: #333333;
    line-height: 1.3;
`
export const H2 = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: #333333;
    line-height: 1.4;
`
export const H3 = styled.div<{ color?: string }>`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${props => props.color || '#333333'};
    line-height: 1.5;
`
export const H4 = styled.div<{ color?: string }>`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.color || '#999999'};
    line-height: 1.5;
`
export const H5 = styled.div<{ color?: string }>`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.color || '#999999'};
    line-height: 1.5;
`
export const H6 = styled.div<{ color?: string }>`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.color || '#999999'};
    line-height: 1.5;
`

export const Exception = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${lighten(0.6, '#000')};
  z-index: -1;
  img {
    width: 50%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  button {
    font-size: 1.8rem;
    padding: 0.5em 2.5em;
    height: auto;
    border-radius: 3em;
    margin-top: 2em;
    background: ${props => props.theme.colors.primary};
  }
  a {
    color: currentColor;
  }
`

export const PharmacyPhoneList = styled.ul`
  margin: 0;
  padding: 0;
  line-height: 5.5rem;
  text-align: center;
  & > li:last-child {
    border: none;
  }
  a {
    color: #333;
  }
`

//底部超大的绿色按钮 但是是个上传文件框其实
export const ButtonBigInputFile = styled.input`
    font-weight: bold;
    font-size: 1em;
    line-height: 2.8em;
    height: 2.8em;
    padding: 0 2.5em;
    border-radius: 2.5em;
    flex-grow:2;
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`

export const Greet = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`

export const SPAN0 = H0.withComponent('span')
export const SPAN1 = H1.withComponent('span')
export const SPAN2 = H2.withComponent('span')
export const SPAN3 = H3.withComponent('span')
export const SPAN4 = H4.withComponent('span')
export const SPAN5 = H5.withComponent('span')
export const SPAN6 = H6.withComponent('span')

