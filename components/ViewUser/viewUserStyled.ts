import styled from "styled-components";
import { AiTwotoneStar } from 'react-icons/ai';

export const Container = styled.div<{disableInDesktop: boolean}>`
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    width:80%;
    padding:.5rem;
    @media (min-width: 768px) {
        margin-right: 1rem;
        width:40%;
        min-height: 100%;
        flex-direction: column;
        text-align: center;
        align-items: center;
        ${({disableInDesktop}) => disableInDesktop&& `
            display:none;
        `}
    }
`

export const ProfilePicture = styled.div<{position?: 'absolute'}>`
    display:flex;   
    flex-direction:column;
    text-align:center;
    align-items:center;
    margin-right: .5rem;
    span{
        border-radius:120px;
    }
    @media (min-width: 768px) {
        margin-right: 0rem;

        ${({position}) => position === 'absolute' && `
            position: absolute;
            right: 20%;
            top: 30%;
        `}

    }
    
    
`

export const ProfileImageDiv = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    @media (max-width: 768px) {
        span{
            border-radius: 10px;
        }
    }
    @media (min-width: 768px){
        width: 3rem;
        height: 3rem;

    }
    
    position: relative;
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
        font-size: 36px;

    }

`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 768px){
        align-items: center;
    }
    
    
`
