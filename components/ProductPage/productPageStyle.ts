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
    width:10rem;
    height:8rem;

    @media(min-width: 768px){
        height:8rem;
    }
`

export const ProductTitle = styled.h1`
    text-align: center;
    max-width:80%;
    margin-top:.5rem;
    @media (min-width: 768px) {
        max-width: 100%;
    }
`

export const ProductPriceContainer = styled.div`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    width: 100%;
    overflow-y: auto;

`

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-block:.3rem;
    border-bottom: 1px solid black;
    :last-child{
        border-bottom: 0px ;
    }
`

export const SizeButton = styled.button`
    margin-inline:.1rem;
    padding-inline:.4rem;
    padding-block:.2rem;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
`

export const PriceValue = styled.h1`
    font-size:18px;
    font-weight: 700;
`

export const PlusIcon = styled(BsPlusLg)`
    :hover{
        cursor:pointer;
    }
`

export const ProductDescreptionDiv = styled.div`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-top: 1rem;
    background-color:${({ theme }) => theme.colors.productPrice.descreptionDiv};
    display:flex;
    flex-direction: column;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    overflow-y: auto;
    width: 100%;
`

export const AlignPrices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:.5rem;
`



export const DescreptionTitle = styled.h1`
    font-weight: 500;
    font-size: 12px;
`
export const DescreptionText = styled(DescreptionTitle)`
    font-weight: 400;
`


export const AlingRowDesktop = styled.div<{direction?:string}>`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px){
        align-items: flex-start;
        flex-direction: row-reverse;
        ${({direction}) => direction != '' && `
            flex-direction: ${direction};
        `}
        
    }
    
`

export const AlingCollumDesktop = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px){
        flex-direction: column;
        margin-right:2rem;
        width:80%;

        
    }
    
`