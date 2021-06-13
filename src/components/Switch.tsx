import styled from 'styled-components'

const Switch = styled.input.attrs({
  type: 'checkbox'  
})`
  appearance: none;
  position: relative;
  width: 3.6rem;
  height: 2.1rem;
  border: 0.2rem solid rgba(0,0,0,0.1);
  outline: 0;
  border-radius: 2.1rem;
  box-sizing: border-box;
  transition: background-color 0.1s,border 0.1s;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 2rem;
    background-color: #f7f7f7;
    transition: transform 0.35s cubic-bezier(0.45,1,0.4,1);
  }
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0.1rem 0.3rem rgba(0,0,0,0.4);
    transition: transform 0.35s cubic-bezier(0.4,0.4,0.25,1.35);
  }
  :checked {
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    &:before {
      transform: scale(0);
    }
    &:after {
      transform: translateX(1.5rem);
    }
  }
`

export default Switch