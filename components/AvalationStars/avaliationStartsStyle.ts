import { AiTwotoneStar } from "react-icons/ai"
import styled from "styled-components"

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

export const Star = styled(AiTwotoneStar)<{disabled:boolean}>`
    color: ${({disabled}) => disabled ? `#FF7A00` : `black`} ;
    
`

export const AvaliationValue = styled.h1`
    color:#FF7A00;
    font-size:12px;
    @media (min-width: 768px) {
        font-size:36px;
    }
`