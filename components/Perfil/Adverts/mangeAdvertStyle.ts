import { AiOutlineCamera } from "react-icons/ai";
import styled from "styled-components";

export const AlingCollum = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    @media (min-width: 768px){
        flex-direction: column-reverse;
        width: 50%;
        align-self: start;
    }
`

export const AlingCollumInputs = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
`

export const AlignTitleAndContent = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    align-self: center;
    align-items: center;
    
    text-align: start;
    margin-top: .5rem;


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
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
    }
`

export const PublisherButton = styled.button`
    padding-inline:1rem;
    padding-block:.5rem;
    width:8rem;
    align-self: center;
    margin-top:1.5rem;
`

export const MarkToSell = styled.div`
    
    width: 90%;
    margin-top:2rem;
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


`