import React, { lazy, useLayoutEffect } from "react"
import { Route, Switch, useHistory, useLocation } from "react-router-dom"
import { COPYWORK, PAGEPATH } from './config'
import Home from './pages'
import { app, user } from './utils/container'

const AsyncLogin = lazy(() => import('./pages/login'))
const AsyncNotFound = lazy(() => import("./pages/404"))
const AsyncForbidden = lazy(() => import("./pages/403"))
const AsyncServerError = lazy(() => import("./pages/serverError"))

export default function Routes() {
  const { pathname } = useLocation()
  const history = useHistory()

  useLayoutEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      //检查http还是https
      let targetProtocol = "https:"
      if (window.location.protocol !== targetProtocol)
        window.location.href = targetProtocol +
          window.location.href.substring(window.location.protocol.length)
    }

    initCheck()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const trySignIn = async () => {
    try {
      // 尝试静默登陆
      await app.login()

    } catch (error) {
      console.log("Routes component try sign in function error", error)

      // 非微信环境，需要手动登录
      if (error.message === COPYWORK.err.envError) return history.push(PAGEPATH.login)

      // 静默状态下登陆收到201或者303表示用户未绑定手机号
      if (error.name === '201' || error.name === '303') return history.push(PAGEPATH.login)

      return app.showToast(error.message)
    }
  }

  const initCheck = async () => {
    // new_page用于编写页面测试效果
    if (process.env.NODE_ENV !== 'production' && /new_page/.test(pathname)) return

    if (pathname === '/login' || /agreement/.test(pathname)) return

    // 错误页面
    if (/40./.test(pathname)) return

    // 判断是否已经登录，否则调用登录方法
    if (!app.logged) await trySignIn()

    // 已经登录而未获取到配置信息则获取App配置信息、用户信息、用户定位信息
    if (app.logged && (!app.config.agreementUrl || !user.info)) {
      try {
        //启动加载
        await Promise.all([user.fetchInfo()])
      } catch (error) {
        app.showToast(error.message)
      }
    }
  }

  return (
    <div id="routes">
      {/* TODO:一般路由切换动画 */}
      <Switch>
        {/* 新建页面 */}
        <Route path={PAGEPATH.forbidden}><AsyncForbidden /></Route>
        <Route path={PAGEPATH.notFound}><AsyncNotFound /></Route>

        {/* 配置登录流程路由 */}
        <Route path={PAGEPATH.login}><AsyncLogin /></Route>

        {/* 配置Tabs页面路由 * TODO: Tab页切换动画 */}
        <Route exact path={PAGEPATH.home}>
          <Home />
        </Route>

        {/* Finally, catch all unmatched routes */}
        <Route component={AsyncNotFound} />
        <Route component={AsyncServerError} />

      </Switch>
    </div>
  )
}