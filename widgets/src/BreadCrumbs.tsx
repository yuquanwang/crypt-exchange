import React from 'react'
import styled, { css } from 'styled-components'

const Text = styled.span<{ last: boolean }>`
  ${props => props.last && css`
    font-size: 1.2rem;
  `}
  cursor: pointer;
`

const BreadCrumbs = (props: BreadCrumbsProps) => {
  const { data } = props

  const handleClick = (index: number) => {
    props.onChange(data[index].path)
  }

  return (
    <div className={props.className}>
      {data.map((item, index) => (
        <Text key={item.label} last={index === data.length - 1} onClick={() => handleClick(index)}>
          {`${item.label} ${(index === data.length - 1) ? '' : '/'} `}
        </Text>
      ))}
    </div>
  )
}

export default BreadCrumbs

interface BreadCrumb {
  label: string
  path: string
}

interface BreadCrumbsProps {
  data: BreadCrumb[]
  onChange(path: string): void
  className?: string
}
