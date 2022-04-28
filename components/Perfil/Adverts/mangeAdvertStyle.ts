import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";

export const AlingCollum = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    
    @media (min-width: 768px){
        flex-direction: column;
        width: 100%;
        padding-inline: .5rem;

    }
`

export const AlingCollumInputs = styled.div`
    display:flex;
    flex-direction: column;
    padding-inline: .5rem;
    width: 100%;
    height: 100%;

    @media (min-width: 768px){
        padding:0;
        padding-inline: .5rem;

    }
`

export const AlignTitleAndContent = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    align-self: center;
    align-items: center;
    
    text-align: start;
    margin-top: .5rem;
    @media(min-width: 768px){
        width: 100%;
        margin-top: 0rem;

    }

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
    @media(min-width: 768px){
        margin-top:0rem;
        width: 100%;
        padding-block:.25rem;

    }    


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
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
        align-items: start;
        padding-inline: .2rem;

    }
`

export const PublisherButton = styled.button`
    padding-inline:1rem;
    padding-block:.5rem;
    align-self: center;
    margin-block: 1.5rem;
    @media(min-width: 768px){
        

        padding-inline:1rem;
        padding-block:.25rem;
    }
`

export const MarkToSell = styled.div`
    
    width: 90%;
    margin-bottom:3rem;

    display:flex;
    flex-direction:row;
    align-items:start;
    font-size:12px;
    padding-inline:.5rem;
    div{
        text-align:start;
    }

    h1:first-child{
        font-weight:900;
        font-size:14px;
        margin-left: .5rem;

    }
    h1{
        font-weight:400;
        font-size:14px;
        margin-left: .5rem;

    }
    @media(min-width: 768px){
        margin:0px;
    }


`