import React  from 'react'
import styled from "styled-components"
import { ReactComponent as IconClear } from '../assets/clear.svg'

interface HeaderImageProps {
    src?: string
    fallbackSrc?: string
}

const Image = styled.img`
    width: 100%;
    min-height:3em;
    background:rgba(238,238,238,1);
    border-radius:10px;
`


const HeaderImage: React.FC<HeaderImageProps> & {} = (props) => {

    const { src, fallbackSrc } = props

    let element: HTMLImageElement | null
    const changeSrc = (newSrc?: string) => {
        if(element && newSrc){
            element.src = newSrc
        }
    }

    return (
        <Image src={src}
                 onError={() => changeSrc(fallbackSrc)}
                 ref={el => element=el}
            />
    )
}

HeaderImage.defaultProps = {
    fallbackSrc: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
}

export default HeaderImage
