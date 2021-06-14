import { cover } from 'polished'
import React, { IframeHTMLAttributes } from 'react'
import styled from 'styled-components'

const allowList = {
  'layout-animations': 'none',
  'unoptimized-images': 'none',
  'oversized-images': 'none',
  'sync-script': 'none',
  'sync-xhr': 'none',
  'unsized-media': 'none',
  'document-domain': 'none',
  'geolocation': 'none',
  'navigation-override': 'none',
  autoplay: 'none',
  camera: 'none',
  microphone: 'none',
  payment: 'none',
}

export const allow = Object.entries(allowList)
  .map(([key, value]) => (`${key} '${value}'`)).join('; ') + ';'

const Iframe = styled.iframe`
  ${cover()}
  background: transparent;
  border: none;
  width: 100%;
  height: 100vh;
  ${props => props.height && `height: ${props.height}px;`}
`

export default (props: IframeHTMLAttributes<{}>) => {
  const { allow, ...others } = props
  return <Iframe allow={allow} {...others} />
}