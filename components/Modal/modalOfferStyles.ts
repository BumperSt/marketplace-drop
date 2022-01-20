import { AiTwotoneStar } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import styled from "styled-components";

export const ProductImagensDiv = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    padding-inline: 1rem;
`

export const ListImage = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 1rem;
    justify-content: center;
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction:column;
    text-align: start;
    align-items: start;
    width:100%;
    padding-inline: 1rem;
    
`

export const ImageDiv = styled.div`
    display: flex;
    span{border-radius: 10px;}
    margin-bottom: .5rem;
    margin-top: .5rem;

`

export const AlignRow = styled.div`
    display:flex;
    flex-direction:row;
    margin-top: .5rem;
    align-items:center;

`

export const SmallImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-block: .2rem;
`

export const ProductTitle = styled.h1`
    font-size: 18px;
    font-weight: 700;
    max-width: 90%;
`

export const ShareIcon = styled(FiShare2)`
    color:${({ theme }) => theme.colors.head.textAndIcons};
    z-index: 50;

`

export const ProductSubTitle = styled.h1`
    font-size: 12px;
    font-weight: 400;
`

export const ProductSize = styled.button`
    background-color:black;
    font-size: 12px;
    padding-inline:.3rem;
    padding-block:.2rem;
    margin-right:.1rem;
`

export const ProductPrice = styled.h1`
    font-size: 36px;
    margin-top: .5rem;
`

export const BuyButton = styled.button`
    border-radius: 10px;
    padding-inline: 2rem;
    padding-block: .3rem;
    margin-top:.5rem;
    align-self: center;
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
    width: 100%;
    text-align: start;
`

export const DescreptionTitle = styled.h1`
    font-weight: 700;
    font-size: 14px;
    margin-bottom:.5rem;
`

export const DescreptionText = styled(DescreptionTitle)`
    font-weight: 400;
`