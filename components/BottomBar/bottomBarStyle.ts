import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bottomBar.background};
    text-align: center;
    margin-top: 1rem;
    padding:1rem;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 12px;
    width: 300;
    margin-bottom: .5rem;
`

export const DivColumn = styled.div`
    margin-top: .8rem;
    width:20%;
    justify-content: space-around;
    display:flex;
    flex-direction: row;
`
export const CopDiv = styled.div`
    text-align: start;
    margin-top: .8rem;

`

export const CopTitle = styled.h1`
    font-size: 11px;
    font-weight: 600;
    margin-bottom: .2rem;
`   

export const CopDescription = styled.h1`
    font-size:9px;
    max-width:60%;
`