import { BiArrowBack } from 'react-icons/bi'
import styled from 'styled-components'

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.6);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`

export const BackIcon = styled(BiArrowBack)`
    position: absolute;
    left: 10%;
    
`

export const ModalContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.body};
    overflow: auto;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    @media (min-width: 768px) {
        margin-top: 5%;
        padding: .7rem;
        max-width: 80%;

    }
`

export const ModalTitle = styled.h1`
    font-weight: bold;
    max-width: 100%;
    font-size:36px;
    line-height: 42px;
    @media (max-width: 300px){
        font-size: 20px;
    }
`

export const ModalSubTitle = styled.h1`
    font-size: 24px;
    font-weight:500;
    line-height: 28px;

    margin-block:.5rem;
    @media(min-width: 768px){
        font-size: 36px;
        margin-block:.3rem;
    }
`

export const ModalInput = styled.input`
    border-radius: 10px;
    margin-block:.3rem;
    padding:.5rem;
    font-size:14px;
    font-weight:300;
    width:90%;
    border:0px;
    background-color:${({theme}) => theme.colors.input.background};
    color:${({ theme }) => theme.colors.detalhes};
    font-weight: 300;
    @media (min-width: 768px) {
        margin-block:.2rem;
        border-radius: 25px;
        
        font-size: 24px;

    }
`

export const ModalButton = styled.button<{otherColor?:boolean}>`
    margin-block: 1rem;
    margin-inline: 1rem;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    font-weight: 900;
    border-radius:5px;
    font-size:18px;
    ${({otherColor}) => otherColor && `
        background-color: rgba(0,0,0,0);
        color:#2A2A2A;
        border:solid 1px #959595;
        border-radius: 15px;

    `}
    @media (min-width: 768px) {
        margin-block: .5rem;
        padding-block: 0.2rem;
        padding-inline: 0.8rem;
        border-radius:60px;
        align-self:center;
        font-size: 36px;
    }
`

export const LostPasswordText = styled.h1`
    color:#0057FF;
    font-weight: 400;
    font-size:12px;
    text-align: start;
    width:85%;
    margin-bottom:.5rem;
`
export const OurCreateNewText = styled.h1`
    margin-block:.3rem;
    color:${({theme }) => theme.colors.detalhes};
`

export const InputsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top: 1rem;
    width: 90%;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin-top: .5rem;
    }   

`

export const AlignRowButtons = styled.div`
    display:flex;
    flex-direction: row;
`

export const AlignRowInputs = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const AlingCenter = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`