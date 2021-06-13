import styled from 'styled-components'
import React, { HtmlHTMLAttributes } from "react"
import headerBackground from '../assets/logo_rotated.svg'

const HeaderContainer = styled.div<HeaderProps>`
  position: absolute;
  top: 0;
  left: -10rem;
  right: -10rem;
  height: 20rem; 
  background: center / contain no-repeat ${props => props.theme.colors.primary};
  color: #fff;
  padding: 0 10rem;
  ${props => props.primary && `border-radius: 0 0 50% 50%;`};
  z-index: -1;
  overflow: hidden;
`

const BackImg = styled.div`
  position: absolute;
  height: 14.6rem;
  width: 27.2rem;
  left: 8rem;
  top: 4rem;
  background-image: url(${headerBackground});   
  background-size: 27.2rem 14.6rem;
  z-index: -1;
`

export default (props: HeaderProps) => {
  return (
    <HeaderContainer primary={props.primary}>
      {/*{props.primary && <BackImg />}*/}
      <div className={props.className}>{props.children}</div>
    </HeaderContainer>
  )
}

interface HeaderProps extends HtmlHTMLAttributes<HTMLDivElement> {
  primary?: boolean
}