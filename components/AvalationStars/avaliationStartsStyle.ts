import { AiFillStar } from "react-icons/ai"
import styled from "styled-components"

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

export const Star = styled(AiFillStar)<{disabled:boolean}>`
    color: ${({disabled}) => disabled ? `#FF7A00` : `black`} ;
    :hover{
        cursor:pointer;
    }
    
`

export const AvaliationValue = styled.h1`
    margin-left: .25rem;
    color:#FF7A00;
    font-size:10px;
    @media (min-width: 768px) {
        font-size:36px;
    }
`