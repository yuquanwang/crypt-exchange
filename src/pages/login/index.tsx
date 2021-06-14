import { observable } from 'mobx'
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoSrc from '../../assets/medtree.svg'
import Button from '../../components/Button'
import { Page } from '../../components/Page'
import ToggleCheck from "../../components/ToggleCheck"
import { COPYWORK, PAGEPATH } from '../../config'
import { app } from '../../utils/container'
import { validateMobile, validateVerifyCode } from '../../utils/validators'
import { Input } from '../style'
import { CodeWrapper, ImageContainer, LoginButton, PhoneWrapper, StyledA, StyledImg } from './style'

const loginForm = observable({ phone: '', code: '' })

export default () => {
  document.title = COPYWORK.titles.login
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [count, setCount] = useState(0)
  const [codeButtonDisabled, setCodeButtonDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [checkedLicense, setCheckedLicense] = useState(false)
  const history = useHistory()


  useEffect(() => {
    // if(app.inWechat){
    //     window.location.href = "/"
    //      return
    // }
    setPhone(loginForm.phone)
    setCode(loginForm.code)
  }, [])

  useEffect(() => {
    try {
      // 验证码按钮不可用，输入正确的手机号后变为可用
      validateMobile(phone)
      setCodeButtonDisabled(false)

      // 手机号符合要求并且验证码符合要求才能提交
      validateVerifyCode(code)
      setSubmitDisabled(false)
    } catch (error) {
      setSubmitDisabled(true)

      // 输入完成进行错误信息提示
      if (/手机/.test(error.message)) {
        setCodeButtonDisabled(true)
        phone.length === 11 && app.showToast(error.message)
      }
    }
  }, [phone, code])

  // 倒计时
  useEffect(() => {
    let timeoutId = setTimeout(() => count > 0 && setCount(count - 1), 1000)

    // clean up
    return () => clearTimeout(timeoutId)
  }, [count])

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  const handleClickVerifyCode = async () => {
    try {
      // 启动计时器
      setCount(60)
      await app.sendVerifyCode(phone)
    } catch (error) {
      setCount(0)
      app.showToast(error.message)
    }
  }

  const handleSubmit = async () => {
    console.log(checkedLicense)
    if (!checkedLicense) {
      app.showToast("需要勾选 已阅读并同意用户协议")
      return
    }
    try {
      await app.login(phone, code)

      console.log("document.referrer 内容为", document.referrer)
      if (document.referrer.indexOf("login") > 0) {
        console.log("history.push(PAGEPATH.preference)")
        history.push(PAGEPATH.preference)
      } else {
        console.log("history.goBack")
        if (!document.referrer) {
          history.push(PAGEPATH.preference)
        } else {
          history.goBack()
        }
      }

    } catch (error) {
      // 新注册用户，进入进入激活流程
      if (error.name === '201') {
        history.push(PAGEPATH.preference)
      } else {
        app.showToast(error.message)
      }
    }
  }

  const handleClickAgreement = (e: MouseEvent<HTMLAnchorElement>) => {
    // 页面跳转时，使用mobx管理phone and code
    loginForm.phone = phone
    loginForm.code = code
  }

  // @ts-ignore
  return (
    <Page style={{ background: 'white' }}>
      <ImageContainer><StyledImg src={logoSrc} alt={COPYWORK.fallback} /></ImageContainer>
      <Input type='tel' value={phone} placeholder={COPYWORK.login.inputPhone}
        maxLength={11} onChange={handlePhoneChange} />
      <PhoneWrapper>
        <Input type='tel' placeholder={COPYWORK.login.inputCode} value={code} maxLength={6}
          onChange={handleCodeChange} />
        <CodeWrapper>
          <Button layout="ghost" disabled={codeButtonDisabled || count > 0}
            onClick={handleClickVerifyCode}>
            {count > 0
              ? <span><span className='number'>{count >= 10
                ? count : `0${count}`}</span>s 后获取</span>
              : COPYWORK.login.verifyCode}
          </Button>
        </CodeWrapper>
      </PhoneWrapper>
      <StyledA>
        <ToggleCheck onToggle={(v: boolean) => {
          setCheckedLicense(v)
        }} />
        <span style={{ fontSize: "1.4rem" }}>
          已阅读并同意
          <Link to={PAGEPATH.agreement} onClick={handleClickAgreement}>
            {COPYWORK.login.agreement}
          </Link>
        </span>

      </StyledA>
      <LoginButton layout="primary" disabled={submitDisabled} onClick={handleSubmit} >
        {COPYWORK.login.submit}
      </LoginButton>
    </Page>
  )
}
