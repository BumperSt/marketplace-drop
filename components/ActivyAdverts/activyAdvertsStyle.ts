import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    width: 95%;
    text-align: center;
`

export const ActivyAdvertsTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
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
    margin-top: 1rem;
    padding-block:.3rem;
    padding-inline:.5rem;
`

export const AdvertsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height:9rem;

`
