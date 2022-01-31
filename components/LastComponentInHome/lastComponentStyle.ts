import styled from "styled-components";

export const ListComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 1rem;
`
export const ItemDiv = styled.div`
    align-self: center;
    position: relative;
`

export const Descreption = styled.h1`
    position: absolute;
    bottom: 10%;
    left:5%;
    color:white;
    font-size:9px;
    font-weight:300;
    max-width: 60%;
    margin-top: .5rem;
    border-radius: 15px;
    @media (min-width: 768px) {
        font-size: 36px;
        max-width: 80%;
        bottom: 5%;
        left:2%;


    }
`


export const LastComponentTitle = styled.h1`
    font-weight: 700;
    margin-block: .5rem;
    @media (min-width: 768px) {
        font-size: 64px;
        margin-top: 1rem;

        

    }
`