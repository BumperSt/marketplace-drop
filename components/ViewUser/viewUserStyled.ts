import styled from "styled-components";
import { AiTwotoneStar } from 'react-icons/ai';

export const Container = styled.div`
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    width:80%;
    padding:.5rem;
    @media (min-width: 768px) {
        width:30%;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`

export const ProfilePicture = styled.div`
    display:flex;   
    flex-direction:column;
    text-align:center;
    margin-right: .5rem;
    @media (min-width: 768px) {
        margin-right: 0rem;

    }
    
`

export const ProfileName = styled.h1`
    font-weight: 600;
    margin-bottom: 0.3rem;
    margin-right: .5rem;

    @media (max-width: 300px){
        font-size: .6rem;

    }
    @media (min-width: 768px) {
        margin-right: 0rem;

    }

`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 768px){
        align-items: center;
    }
    
    
`
