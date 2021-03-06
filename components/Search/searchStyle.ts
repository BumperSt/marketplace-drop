import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';



export const SearchContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;    
    background-color:white;
    align-items: center;
    position: absolute;
    top:0;
    left:0;
    overflow-y: auto;

`

export const SearchIcon = styled(BsSearch)`
    fill:black;
    margin-right: .3rem;

`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.input.background};
    margin-bottom: 2rem;
    padding-inline:.5rem;
    width: 90%;
    align-items:center;
    border-radius: 15px;
    margin-top: 1rem;
    @media (min-width: 768px){
        width: 100%;
        margin: 0rem;
        padding-inline:.25rem;
        height: .8rem;
        margin-right: .8rem;

    }
`

export const SearchContentTitle = styled.h1`
    max-width: 65%;
    font-weight: 700;
    margin-top:1rem;
    margin-bottom:0.8rem;
    @media (min-width: 768px){
        font-size: 72px;
        max-width: 70%;
    }

`

export const SearchInput = styled.input `
    border: 0px;
    background-color: transparent;
    color:${({ theme }) => theme.colors.input.text};
    padding-block:.5rem;
    width: 100%;
    font-size: 14px;
    font-family: roboto;
    font-style: italic;
    @media (min-width: 768px) {
        font-weight: 400;
        font-size: 24px;
        padding-block:.25rem;
    }
`
export const ContainerSearch = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom:5rem;
`
