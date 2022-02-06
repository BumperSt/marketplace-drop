import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    width: 90%;
    @media (min-width: 768px) {
        width: 80%;

    }
`


export const ContainerPassword = styled(Container)`
    margin-top: 0rem !important;
    @media (min-width: 768px) {
        margin-top: .5rem !important;
    }

`

export const Title = styled.h1`
    text-align: center;
    color:${({ theme }) => theme.colors.detalhes};
    width:100%;
    font-size: 18px;
    display:none;
    @media (max-width: 300px){
        font-size:.8rem;
    }
    @media (min-width: 768px) {
        font-size:48px;
        display:inline;

    }
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
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
    @media (min-width: 768px) {
        align-items: start;
    }
`

export const ContainerEditInfoPassword = styled(ContainerEditInfo)`
    margin-top: 0;
    padding-block:0rem;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    @media (min-width: 768px) {
        margin-top: .3rem !important;
        
        align-items: center;
    }
    `

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: start;

    }
`


export const ChangeImageText = styled.h1`
    margin-top: .3rem;
    font-size: 10px;
    @media (min-width: 768px) {
        font-size:18px;
    }
`

export const SaveInfosButton = styled.button`
    padding-block: .3rem;
    padding-inline: 1rem;
    margin-block: 1rem;
    align-self:center;
`

export const AlingRowInDesktop = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

