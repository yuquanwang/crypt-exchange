/* eslint-disable max-len */
import { cover } from 'polished'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from '../config'
import Mask from './Mask'

const loadingIcon = `transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E") no-repeat`

const Page = styled.div`
  ${cover()}
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  
`

const Masked = styled(Mask)`
  display: inline-block;
  padding: 1.6rem;
  border-radius: ${theme.size.borderRaduis};
  color: ${theme.colors.background};
  max-width: 60%;

  .innerDiv {
    display: flex;
    flex-direction: column;
  }
`

const StyledIcon = styled.div`
  width: 2em;
  height: 2em;
  margin: 0 auto;
  margin-bottom: 4px;
  vertical-align: middle;
`

export const Loading = styled(StyledIcon)`
  animation: weuiLoading 1s steps(12, end) infinite;
  background: ${loadingIcon};
  background-size: 100%;

  @keyframes weuiLoading {
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}
`
const Success = styled(StyledIcon)`
  background: ${theme.colors.background};
  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
  mask-position: center;
  mask-size: cover;
`

const Toast: FunctionComponent<ToastProps> = (props) => {
  return (
    <Page>
      <Masked minmal style={{ maxWidth: "60%" }}>
        {props.type === 'loading' && <Loading />}
        {props.type === 'success' && <Success />}
        <div className="innerDiv">
          {
            props.children instanceof Array && props.children.length > 0 && props.children.map(item => (
              <div>
                {item}
              </div>
            ))
          }
          {
            !(props.children instanceof Array) &&
            <div>
              {props.children}
            </div>}
        </div>
      </Masked>
    </Page>
  )
}

interface ToastProps {
  type?: 'loading' | 'success' | 'error'
}

export default Toast
