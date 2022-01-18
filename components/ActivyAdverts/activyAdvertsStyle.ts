import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 95%;
    text-align: center;
`

export const ActivyAdvertsTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
    font-weight: 700;
`

export const AdvertsContainer = styled.div`
    padding-inline:1rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
`

export const AdvertButton = styled.button`
    margin-top: .5rem;
    padding-block: 0.5rem;
    padding-inline: 0.9rem;

`

export const AdvertsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height:9rem;
    padding-inline:.5rem;
`
