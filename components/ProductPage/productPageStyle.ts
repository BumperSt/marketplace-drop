import { BsPlusLg } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerProductPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: center;
    align-items: center;
    @media(min-width: 768px) {
        width: 100%;
        padding-inline: 1rem;
        padding-block:0;
    }
`

export const AlignIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 100%;
`

export const BackIcon = styled(IoMdArrowBack)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 50;
    :hover{
        cursor: pointer;
    }

`

export const ShareIcon = styled(FiShare2)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 50;
    :hover{
        cursor: pointer;
    }

`

export const ProductImage = styled.div`
    display: flex;
    margin-top:.5rem;
    position: relative;
    width:80%;
    height:8rem;

    @media(min-width: 768px){
        height:6rem;
        width:8rem;
        margin-top:0rem;
        margin-bottom:.25rem;

    }
`

export const ProductTitle = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size:24px;
    max-width:80%;
    margin-bottom:.8rem;

    margin-top:.5rem;
    @media (min-width: 768px) {
        max-width: 70%;
        font-weight: 900;
        font-size:36px;
        margin-bottom:.25rem;

    }
`

export const ProductPriceContainer = styled.div`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-bottom:.8rem;
    border:solid 1px ${({ theme }) => theme.colors.stroke};
    background-color:white;
    display:flex;
    flex-direction: column;
    border-radius:15px;
    justify-content: center;
    width: 100%;
    overflow-y: auto;
    position: relative;
    @media (max-height: 600px) {
        padding-inline:.2rem;
    }
    @media(min-width: 768px){
        padding-inline:.5rem;
        border-radius:5px;

    }

`

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-block:.3rem;
    justify-content: space-between;
    :last-child{
        border-bottom: 0px ;
    }
    @media(min-width: 768px){
        padding-inline:2rem;
    }
    :hover{
        cursor:pointer;
    }
`

export const StyledLine = styled.hr`
    width: 90%;
    align-self: center;
    margin-bottom: .25rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`

export const SizeButton = styled.div`
    margin-inline:.1rem;
    padding-inline:.4rem;
    padding-block:.2rem;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    color:white;
    @media(min-width: 768px){
        font-size:24px;
        font-weight: 900;
        padding-inline:.1rem;
        padding-block:.05rem;

    }
`

export const PriceValue = styled.h1`
    font-size:18px;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    font-weight: 700;
    @media(min-width: 768px){
        font-size: 24px;
        font-weight: 900;
    }
`


export const ProductDescreptionDiv = styled.div`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-block:1rem;
    display:flex;
    flex-direction: column;
    border-radius:5px;
    border:solid 1px ${({ theme }) => theme.colors.stroke};
    justify-content: center;
    overflow-y: auto;
    width: 100%;
    @media(min-width: 768px){
        padding-inline:.5rem;
        padding-block:.2rem;
        margin-block:0rem;
        width:8rem;

    }
`

export const AlignPrices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(min-width: 768px){
        flex-direction: column;
        
        align-items: flex-start;
    }
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:.5rem;
    margin-inline:.2rem;
    @media(min-width: 768px){
        align-items: center;
        margin:0rem;
        margin-top: .5rem;
        flex-direction: row;
    }
`

export const AlignDescreptionColumn = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:.5rem;
    margin-inline:.2rem;
    @media(min-width: 768px){
        margin-inline:0;
    }

`





export const DescreptionTitle = styled.h1`
    font-weight: 400;
    font-size: 12px;
    @media (min-width: 768px) {
        font-size:18px;
    }
`
export const DescreptionText = styled(DescreptionTitle)`
    font-weight: 700;
    font-size: 14px;
    margin-top: .1rem;
    @media (min-width: 768px) {
        font-size:18px;
        margin-top:0rem;
        margin-left:.2rem;

    }
`


export const AlingRowDesktop = styled.div`
    display:flex;
    flex-direction: column;
    @media(min-width: 768px){
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
`

export const AlingRowDesktopDescreption = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px){
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`

export const AlingCollumDesktop = styled.div<{margin?:boolean}>`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px){
        width: auto;
    }
    
`