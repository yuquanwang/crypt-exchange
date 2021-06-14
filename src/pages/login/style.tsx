import { lighten } from 'polished'
import styled from 'styled-components'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import {theme} from "../../config"

export const ImageContainer = styled.div`
  margin: 8.0rem auto;
  text-align: center;
`

export const StyledImg = styled.img`
  height: 5.0rem;
`

export const PhoneWrapper = styled.div`
  position: relative;
  margin-top: 2.0rem;

`

export const CodeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  button {
    margin: 0 0.5em;
    padding: 0 0.8em;
    :disabled {
      opacity: 1;
      color: ${lighten(0.6, '#000')};
      border-color: ${lighten(0.8, '#000')};
    }
    .number {
      font-family: arial, monospace;
    }
    border: 1px solid ${theme.colors.primary};

  }
`

// @ts-ignore
export const LoginButton = styled(Button)`
  margin-top: 3.0rem;
`

export const StyledA = styled.div`
  margin: 1.5rem;
  margin-bottom: 0;
  a {
    font-size: ${props => props.theme.size.text - 0.2}rem;
  }
  display:flex;
  justify-content:flex-start;
  align-items:center;
`

export const Title = styled.h1`
  font-size: ${props => props.theme.size.text + 0.6}rem;
  margin: 4rem 0 3rem 0;
`

export const Container = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10.5rem);
`

export const StyledTag = styled(Tag)`
  // margin-bottom: 1rem;
`