import React from 'react'
import Book from '../components/Page'
import Carousel from '../components/Carousel'

export const CarouselSample = () => (
  <Book>
    <Carousel>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  </Book>
)

export default { title: 'Carousel' }