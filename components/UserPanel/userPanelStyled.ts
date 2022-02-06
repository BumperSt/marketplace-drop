import styled from "styled-components";

export const ContainerUserPanel = styled.div`
    display: flex;
    flex-direction: column;
`


export const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AlignRowInDesktop = styled.div`

    display:flex;
    flex-direction: column;
    width:100%;
    align-items: center;
    position:relative;
    @media(min-width: 768px){
        margin-top:1rem;
        align-items: start;
        flex-direction: row;
        justify-content:space-between;
        width:80%;

    }

`