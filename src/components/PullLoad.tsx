import React, {HtmlHTMLAttributes, useRef, useEffect, useState, useImperativeHandle} from 'react'
import styled from 'styled-components'

const IScroll = require('../assets/lib/iscroll-custom')

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw
`
const Scroll = styled.div`
  position: relative;
  min-height: 100vh;
`
const Loading = styled.div`
  height: 30px;
  position: absolute;
  top: -30px;
  text-align: center;
  width: 100%;
  font-size: 12px;
  color: #666;
`

// function isPassive() {
//   var supportsPassiveOption = false
//   try {
//     // @ts-ignore
//     document.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//       get: function () {
//         supportsPassiveOption = true
//       }
//     }))
//   } catch(e) {}
//   return supportsPassiveOption
// }
//
// document.addEventListener('touchmove', function (e) { e.preventDefault() }, isPassive() ? {
//   capture: false,
//   passive: false
// } : false)


export interface PullLoadHandle {
  refresh: () => void;
}

export default React.forwardRef<PullLoadHandle, PullLoadProps>((props, ref) => {
  const { onRefresh, refreshIndex } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const [myScroll, setMyScroll] = useState<any>(null)

  useEffect(() => {
    setTimeout(() => {
      setMyScroll(new IScroll(wrapperRef.current, { mouseWheel: true, probeType: 2, scrollY: true, click: true }))
    }, 500)
  }, [])

  useEffect(() => {
    if(!myScroll) return
    let isRefresh = false

    myScroll.on('scrollEnd', async function() {
      if(isRefresh) {
        if(onRefresh) {
          await onRefresh()
          myScroll.refresh()
        }
      }
    })
    myScroll.on('scroll', function(x: number, y: number) {
      if(y > 30) {
        // @ts-ignore
        loadingRef.current.innerText = '松开立即刷新'
        isRefresh = true
      } else {
        // @ts-ignore
        loadingRef.current.innerText = '下拉可以刷新'
        isRefresh = false
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myScroll])

  useImperativeHandle(ref, () => ({
    refresh: () => {
      setTimeout(() => {
        myScroll && myScroll.refresh()
      }, 100)
    }
  }))

  return (
    <Wrapper ref={wrapperRef}>
      <Scroll>
        <Loading ref={loadingRef}></Loading>
        {props.children}
      </Scroll>
    </Wrapper>
  )
})

interface PullLoadProps extends HtmlHTMLAttributes<HTMLDivElement> {
  onRefresh(): Promise<void>,
  refreshIndex?: number,
}