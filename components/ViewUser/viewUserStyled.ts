import styled from "styled-components";
import { AiTwotoneStar } from 'react-icons/ai';

export const Container = styled.div`
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    width:85%;
    padding:.5rem;

`

export const ProfilePicture = styled.div`
    
`

export const ProfileName = styled.h1`
    font-weight: 600;
    margin-bottom: 0.3rem;

    
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    padding-inline: 0.5rem;

`
export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
`

export const Star = styled(AiTwotoneStar)`
    color:#FF7A00;
`

export const AvaliationValue = styled.h1`
    color:#FF7A00;
    font-size:12px;

`