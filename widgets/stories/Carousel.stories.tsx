import React from 'react'
import Book from '../src/Page'
import { Carousel } from '../src'

export const CarouselSample = () => (
  <Book>
    <Carousel>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Carousel>
  </Book>
)

export const CarouselForTwoChildren = () => (
  <Book>
    <Carousel>
      <div>1</div>
      <div>2</div>
    </Carousel>
  </Book>
)

export default { title: 'Carousel' }