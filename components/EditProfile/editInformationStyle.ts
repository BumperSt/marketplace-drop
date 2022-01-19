import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    width: 90%;
`

export const ContainerEditInfo = styled.div`
    padding-inline:1.5rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`


export const ChangeImageText = styled.h1`
    margin-top: .3rem;
    font-size: 10px;
`

export const SaveInfosButton = styled.button`
    padding-block: .3rem;
    padding-inline: 1rem;
    margin-block: 1rem;
`