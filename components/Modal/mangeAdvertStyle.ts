import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";

export const AlingCollum = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px){
        flex-direction: column-reverse;
        width: 50%;
        align-self: start;
    }
`

export const AlingCollumInputs = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`

export const AlignTitleAndContent = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    
    text-align: start;
    margin-top: .5rem;


`

export const AlignRowSizes = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: .3rem;
    max-width: 100%;
    overflow-x: auto;
    padding-block:.5rem;
    @media (min-width: 768px){
        max-width: 100%;
        margin-top: 0rem;
        padding-block:.25rem;

    }
`

export const SizeButton = styled.button<{active:boolean}>`
    margin-inline:.1rem;
    padding-inline:.4rem;
    padding-block:.2rem;
    font-size: 13px;
    @media (min-width: 768px){
        padding-inline:.1rem;
        padding-block:0rem;
        font-size: 24px;
    }
    ${({active, theme})=> active && `
        background-color:${theme.colors.detalhes}
    `}
`

export const DivTitle = styled.h1`
    font-size: 15px;
    font-weight: bold;
    color:black;
    width: 100%;
    
`

export const AlignPhotos = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: .3rem;
    align-self: flex-start;
    max-width: 100%;
    overflow-x: auto;
    padding-block:.5rem;

`

export const AddPhotosIcon = styled(AiOutlineCamera)`

`

export const AddPhotosTitle = styled.h1`
    font-weight: 700;
    font-size:10px;
`

export const PhotoDiv = styled.div`
    background-color: #D7D7D7;
    min-width: 69px;
    min-height:59px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-right: .5rem;
`

export const AlingRowInDesktop = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`