import React,{useState, useEffect} from 'react'
import { storiesOf } from '@storybook/react'
import Radio from '../components/Radio'
import Book from '../components/Page'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { cover } from 'polished'

const stories = storiesOf('Radio', module)

const Background = styled.div`
  ${cover()}
  background: white;
`


stories.add('radio', () => {
    const [checkOption, setCheckOption] = useState(false)
    let handleClick = () => {
        setCheckOption(!checkOption)
    }
    return(<Book>
        <Background>
          <Radio label={text('label', '男')} value='man' checked={checkOption} onClick={handleClick}/>
        </Background>
    </Book>)
  })
