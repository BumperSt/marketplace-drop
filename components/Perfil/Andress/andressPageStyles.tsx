import { MdArrowForwardIos } from "react-icons/md"
import styled from "styled-components"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"


export const AlignAndressAndArrow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const AndressCollum = styled.div`
    text-align: start;
    display:flex;
    flex-direction: column;
    width: 100%;
`


export const AndressEditContainter = styled(InternalContainer)`
    background-color: white;
    width: 90%;
    @media (min-width: 768px){
        width: 40%;
        border: 0px;
        
    }
    
`



export const AndressDiv = styled.div`
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

export const AndressType = styled.h1`
    font-size:14px;
    font-weight:400;
    min-width:30%;
    text-align:start;
    justify-self: start;
    color:${({theme}) => theme.colors.detalhes};
    
`

export const AndressName = styled.h1`
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


export const InputEditAndress = styled.input`
    color:${({theme}) => theme.colors.detalhes};
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    width: 100%;
    font-size: 14px;
    border-radius: 15px;
    padding-inline: .5rem;
    font-weight: 600;
    padding-block: .5rem;
    border: 0px;
`

export const InputName = styled.h1`
    margin-top: .5rem;
    font-size:12px;
    padding-block:.5rem;
    text-align: start;
    color:${({theme}) => theme.colors.detalhes};
`

export const InputDivRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`

export const SaveButton = styled(AddButon)`
    align-self: end;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);

`