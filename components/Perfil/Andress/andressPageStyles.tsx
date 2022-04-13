import { MdArrowForwardIos } from "react-icons/md"
import styled from "styled-components"

export const Container = styled.div`
    overflow-y: auto;
    display: flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: auto;

    @media (min-width: 768px){
        position: relative;
        width: 100%;
        height: auto;
        margin:0rem;

    }
`

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

export const AndressContiner = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    padding:1rem;
    box-shadow: 2px 4px 4px 4px rgba(0, 0, 0, 0.2);
    margin-bottom:1rem;
    
    @media (min-width: 768px){
        box-shadow:none;
        border:solid 1px ${({theme}) => theme.colors.stroke};
        border-radius: 10px;
    }
`
export const AndressEditContainter = styled(AndressContiner)`
    background-color: white;
    
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
        width:50%;

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

export const InputDiv = styled.div`
    color:${({theme}) => theme.colors.detalhes};
    width: 90%;

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
    width: 90%;
    justify-content: space-between;
`

export const SaveButton = styled(AddButon)`
    align-self: end;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);

`