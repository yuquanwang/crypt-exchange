import React  from 'react'
import styled from "styled-components"
import { ReactComponent as IconClear } from '../assets/clear.svg'

interface MyImageProps {
    src?: string
    fallbackSrc?: string
    showClose?:boolean
    onDelete?:Function
}

const DivImage = styled.div`
    display: inline;
    position: relative;
    img{
        width: 5em;
        height:5em;
        background:rgba(238,238,238,1);
        border-radius:5px;
    }
    .delete_image {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        top: 0;
    }
`


const MyImage: React.FC<MyImageProps> & {} = (props) => {

    const { src, fallbackSrc,showClose,onDelete} = props

    let element: HTMLImageElement | null
    const changeSrc = (newSrc?: string) => {
        if(element && newSrc){
            element.src = newSrc
        }
    }

    const handleClick = (e:any)=>{
        onDelete && onDelete(e)
        e.stopPropagation()
        return false
    }
    return (
        <DivImage>
            <img src={src}
                 onError={() => changeSrc(fallbackSrc)}
                 ref={el => element=el}
            >
            </img>
            {
                showClose && <IconClear className="delete_image" onClick={ handleClick }/>
            }
        </DivImage>
    )
}

MyImage.defaultProps = {
     fallbackSrc: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
     showClose: false
}

export default MyImage
