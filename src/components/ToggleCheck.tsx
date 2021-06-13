import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as CircleActive } from '../assets/check_circel_active.svg'
import { ReactComponent as Circle } from '../assets/circle.svg'
import {theme} from "../config"

const ToggleCheckDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.3em;
    svg {
        margin-top:-0.1em;
        font-size:1em;
        fill:${theme.colors.primary};
    }
`

export default ({ onToggle }: ToggleCheckProps) => {
    const [show, setShow] = useState<boolean>(false)
    const handleClick = () => {
        setShow(!show)
        onToggle(!show)
    }
    return (
        <ToggleCheckDiv onClick={handleClick}>
            {
                show && <CircleActive></CircleActive>
                || <Circle></Circle>
            }

        </ToggleCheckDiv>
    )
}

interface ToggleCheckProps {
    onToggle: (value:boolean) => void;
}
