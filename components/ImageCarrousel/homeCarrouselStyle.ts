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
    @media (min-width: 768px){
        height: 7rem;
    }
    height: 10rem;
`
export const ClickNextImageDiv = styled.div<{rigth?:boolean}>`
    display:flex;
    position: absolute;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    padding: 0.05rem;;
    top: 50%;
    ${({rigth}) => rigth ? `
        right: 2%;
        

        transform: translateY(-50%) rotate(180deg);
    `:`
        

        transform: translateY(-50%);
        left:2%;
    `}
`
export const ClickNextImage = styled(IoIosArrowBack)`
    svg{
        stroke:black;
    }    

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
    @media (min-width: 768px){
        width: .3rem;
        height: .3rem;
    }
    margin-inline:.25rem;
    ${({active}) => active&& `
        background-color:white;
    `}
`