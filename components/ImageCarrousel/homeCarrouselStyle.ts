import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    background-color:red;
`

export const ImageContent = styled.div`
    display:flex;
    position: relative;
    width: 100%;
    height: 10rem;
`

export const ClickNextImage = styled(IoIosArrowBack)<{rigth?:boolean}>`
    z-index: 100;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    :span{
        fill:white;
    }
    ${({rigth}) => rigth && `
        right: 0%;
        transform: translateY(-50%) rotate(180deg);
    `}
    :hover{
        cursor: pointer;
    }
`

export const AlingCarrouselBalls = styled.div`
    display:flex;
    position: absolute;
    flex-direction: row;
    top: 90%;
    left:50%;
    transform: translateX(-50%);
`

export const CarrouselBall = styled.div<{active?:boolean}>`
    display:flex;
    background-color:#C4C4C4;
    border-radius: 60px;
    border: solid 2px #474747;
    width: .5rem;
    height: .5rem;
    margin-inline:.25rem;
    ${({active}) => active&& `
        background-color:white;
    `}
`