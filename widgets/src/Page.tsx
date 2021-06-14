import React, { HtmlHTMLAttributes } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './config'
import { createDefaultStyle } from './utils'

const GlobalStyle = createDefaultStyle``

const StyledDiv = styled.div`
  position: absolute;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &>div {
    margin: 1.875em 1.25em;
    position: relative;
  }
`

export const Page = (props: HtmlHTMLAttributes<HTMLDivElement>) => (
  <StyledDiv {...props}><div>{props.children}</div></StyledDiv>
)

const Book = (props: HtmlHTMLAttributes<HTMLDivElement>) => (
  <Page {...props}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {props.children}
      </>
    </ThemeProvider>
  </Page>
)

export default Book
