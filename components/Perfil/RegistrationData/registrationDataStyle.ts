import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    overflow-y: auto;
    display: flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top:3rem;
    @media (min-width: 768px){
        position: relative;
        width: 100%;
        height: 100%;
        margin:0rem;

    }
`

export const RegistrationDataCollum = styled.div`
    text-align: start;
    display:flex;
    flex-direction: column;
    width: 100%;
`

export const RegistrationDataContiner = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    padding:1rem;
    border-radius: 10px;
    box-shadow: 2px 4px 4px 4px rgba(0, 0, 0, 0.2);
    margin-bottom:1rem;
    @media (min-width: 768px){
        box-shadow:none;
        border:solid 1px ${({theme}) => theme.colors.stroke};
        border-radius: 10px;
    }
`

export const RegistrationTitle =styled.h1`
    font-weight: 600;
    font-size: 24px;
    color:${({ theme }) => theme.colors.fonts[0]};
    margin-block:2rem;
    @media (min-width: 768px){
        display:none;
    }
 
`

export const RegistrationDataDiv = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    margin-block: 1rem;
    @media (min-width: 768px){
        margin-block: .3rem;

    }
    
`

export const RegistrationDataType = styled.h1`
    font-size:14px;
    font-weight:400;
    min-width:30%;
    text-align:start;
    justify-self: start;
    color:${({theme}) => theme.colors.detalhes};
`

export const RegistrationDataName = styled.h1`
    font-size:14px;
    font-weight:600;
    color:${({theme}) => theme.colors.detalhes};

`

export const AlignRegistrationAndArrow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

`
