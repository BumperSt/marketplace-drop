import styled from "styled-components";



export const RegistrationDataCollum = styled.div`
    text-align: start;
    display:flex;
    flex-direction: column;
    width: 100%;
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
