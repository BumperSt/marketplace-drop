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
`

export const RegistrationDataDiv = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    margin-block: 1rem;
    
    
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
