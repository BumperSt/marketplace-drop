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
`

export const ProfilePicture = styled.div`
    display:flex;   
    flex-direction:column;
    text-align:center;
    margin-right: .5rem;
`

export const ProfileName = styled.h1`
    font-weight: 600;
    margin-bottom: 0.3rem;
    @media (max-width: 300px){
        font-size: .6rem;
    }
    margin-right: .5rem;

`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    
`
