import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";

export const DivContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    margin-top: .5rem;
    width: 100%;
`

export const AlignRowSizes = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: .3rem;
    max-width: 100%;
    overflow-x: auto;
    padding-block:.5rem;
`

export const SizeButton = styled.button<{active:boolean}>`
    margin-inline:.1rem;
    padding-inline:.4rem;
    padding-block:.2rem;
    font-size: 13px;
    ${({active})=> active && `
        background-color:#474747

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