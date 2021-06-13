import React, { HtmlHTMLAttributes } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import { theme } from '../config'

const StyledDiv = styled.div <{ bottomsucking?: boolean }>`
    position: absolute;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    &>div {
      margin: 3.0rem 2.0rem;
      ${props => props.bottomsucking && css`
        margin-bottom: 6rem;
      `}
    }
`

export const Page = (props: HtmlHTMLAttributes<HTMLDivElement> & { bottomsucking?: boolean }) => (
  <StyledDiv {...props}><div>{props.children}</div></StyledDiv>
)

const Book = (props: HtmlHTMLAttributes<HTMLDivElement>) => (
  <Page {...props}>
    {props.children}
  </Page>
)

export default Book