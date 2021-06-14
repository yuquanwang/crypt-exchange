import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'
import { theme } from './config'
import GlobalStyle from './GlobalStyle'
import Toast from './components/Toast'
import ErrorBoundary from './utils/ErrorBoundary'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ErrorBoundary>
          <Suspense fallback={<Toast type="loading" />}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
      </>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
