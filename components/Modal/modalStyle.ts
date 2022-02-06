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

export const ModalContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.modal.background};
    width: 90%;
    overflow: auto;
    max-height: 80%;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
        margin-top: 5%;
        padding: .7rem;
        max-width: 80%;

    }
`

export const ModalTitle = styled.h1`
    font-weight: bold;
    max-width: 100%;
    @media (max-width: 300px){
        font-size: 20px;
    }
`

export const ModalSubTitle = styled.h1`
    font-size: 14px;
    margin-block:.5rem;
    @media(min-width: 768px){
        font-size: 36px;
        margin-block:.3rem;
    }
`

export const ModalInput = styled.input`
    border-radius: 15px;
    margin-block:.3rem;
    padding:.3rem;
    font-size:14px;
    width:80%;
    color:${({ theme }) => theme.colors.detalhes};
    font-weight: 300;
    border: solid 1px ${({ theme }) => theme.colors.stroke};;
    @media (min-width: 768px) {
        margin-block:.2rem;
        border: solid 5px ${({ theme }) => theme.colors.stroke};;
        border-radius: 25px;
        
        font-size: 24px;

    }
`

export const ModalButton = styled.button<{otherColor?:boolean}>`
    margin-block: 1rem;
    margin-inline: 1rem;
    padding: 0.5rem;
    font-weight: 600;
    background-color: ${({otherColor, theme }) => otherColor && theme.colors.detalhes};
    @media (min-width: 768px) {
        margin-block: .5rem;
        padding-block: 0.2rem;
        padding-inline: 0.8rem;
        border-radius:60px;
        align-self:center;
        font-size: 36px;
    }
`

export const ModalTextDescription = styled.h1<{FirstColor?: boolean}>`
    font-size: 14px;
    ${({FirstColor,theme}) => FirstColor ? `
            color: ${theme.colors.texts.description};
        `:
        `
            color: ${theme.colors.modal.descriptionTextSecond};
            margin-bottom:1rem;
        `
    } 
    @media (min-width: 768px) {
        font-size: 24px;
        ${({FirstColor}) => FirstColor ? 
            `
            `
            :`
                margin-bottom:0rem;
            `    
        }
    }
    :hover{
        cursor: pointer;
    }
`

export const LineStyled = styled.hr`
    width: 60%;
    text-align:left;
    margin-block:.3rem;
    color:${({theme}) => theme.colors.bottomBar};
    background-color:${({theme}) => theme.colors.bottomBar};
    @media (min-width: 768px) {
        margin-block:.2rem;
        height: 4px;
    }
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