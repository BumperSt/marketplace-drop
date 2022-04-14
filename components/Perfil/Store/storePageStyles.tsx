import { MdArrowForwardIos } from "react-icons/md"
import styled from "styled-components"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"



export const AlignStoreAndArrow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const StoreCollum = styled.div`
    text-align: start;
    display:flex;
    flex-direction: column;
    width: 100%;
`


export const StoreEditContainter = styled(InternalContainer)`
    background-color: white;
    width: 90%;
    @media (min-width: 768px){
        width: 50%;
    }
    
`



export const StoreDiv = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;
    @media (min-width: 768px){
        margin-block: .3rem;

    }
    
`

export const StoreType = styled.h1`
    font-size:14px;
    font-weight:400;
    min-width:30%;
    text-align:start;
    color:${({theme}) => theme.colors.detalhes};
    
`

export const StoreName = styled.h1`
    font-size:14px;
    font-weight:500;
    color:${({theme}) => theme.colors.detalhes};

`

export const AddButon = styled.button`
    margin-top: 2.5rem;
    padding-inline: 1.5rem;
    padding-block:.5rem;
    font-size:14px;
    font-weight:900;
    @media(min-width: 768px){
        margin-top: 1rem;
        font-size:13px;
        padding-block: 0.25rem;
        padding-inline: 0.5rem;
    }
`

export const Arrow = styled(MdArrowForwardIos)`
    fill:${({theme}) => theme.colors.detalhes};
`


export const SaveButton = styled(AddButon)`
    align-self: end;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);

`