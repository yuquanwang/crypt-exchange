import React, { MouseEvent } from 'react'
import { useObserver } from 'mobx-react-lite'
import { useHistory } from 'react-router'
import WebView from '../../components/WebView'
import { app } from '../../utils/container'
import Button from '../../components/Button'
import { StyledSubmit } from '../style'

export default () => {
  document.title = '用户协议'
  const history = useHistory()

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    history.goBack()
  }

  return useObserver(() => (
    <>
      <WebView src={
        app.config.agreementUrl
          ? app.config.agreementUrl
          : 'https://test-wecare.medtreehealth.com/agreements/%E7%94%A8%E6%88%B7%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE%20v1.html'}
        sandbox="" style={{ height: `calc(100vh - 6.0rem)` }} />
      <StyledSubmit>
        <Button layout='primary' onClick={handleSubmit}>我已阅读</Button>
      </StyledSubmit>
    </>
  ))
}