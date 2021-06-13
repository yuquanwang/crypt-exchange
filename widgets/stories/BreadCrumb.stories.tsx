import React from 'react'
import { BreadCrumbs } from '../src'
import Book from '../src/Page'

const handleChange = (path: string) => {
  console.log('changing path: ', path)
}

export default { title: 'Bread crumbs' }

export const BreadCrumbsSample = () => (
  <Book>
    <BreadCrumbs
      data={[{ label: '首页', path: '/' }, { label: '审核概况', path: '/audit' }]}
      onChange={handleChange} />
  </Book>)