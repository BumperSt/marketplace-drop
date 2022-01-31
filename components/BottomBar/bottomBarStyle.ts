import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bottomBar};
    text-align: center;
    margin-top: 1rem;
    padding:1rem;
    align-items: center;
    
`

export const Title = styled.h1`
    font-size: 12px;
    width: 300;
    margin-bottom: .5rem;
    @media (min-width: 768px){
        font-size: 48px;
    }
`

export const DivColumn = styled.div`
    margin-top: .8rem;
    width:20%;
    justify-content: space-around;
    display:flex;
    flex-direction: row;
    @media (min-width: 768px){
        margin-top: 1rem;
    }
`
export const CopDiv = styled.div`
    text-align: start;
    margin-top: .8rem;

`

export const CopTitle = styled.h1`
    font-size: 11px;
    font-weight: 600;
    margin-bottom: .2rem;
    @media (min-width: 768px){
        font-size: 48px;
        margin-bottom: .2rem;

    }
`   

export const CopDescription = styled.h1`
    font-size:9px;
    max-width:60%;
    @media (min-width: 768px){
        font-size: 36px;
    }
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

export const ToglleThemeDiv = styled.div`
    align-items:center;
    display:flex;
    flex-direction: row;
    border: solid 1px white;
    border-radius: 40px;
    padding-inline: .1rem;
`