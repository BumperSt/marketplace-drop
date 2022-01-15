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
`

export const ModalContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.modal.background};
    width: 80%;
    overflow: auto;
    max-height: 100%;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    text-align: center;
`

export const ModalTitle = styled.h1`
    font-size: 26px;
    font-weight: bold;
    max-width: 75%;
`

export const ModalSubTitle = styled.h1`
    font-size: 14px;
    margin-block:.5rem;
`

export const ModalInput = styled.input`
    border-radius: 15px;
    margin-block:.3rem;
    padding:.3rem;
    font-size:14px;
    width:80%;
    color:#474747;
    font-weight: 300;
    border: solid 1px #CDCDCD;
`

export const ModalButton = styled.button`
    margin-block: 0.7rem;
    padding-inline: 1rem;
    font-weight: 600;
    padding-block: 0.3rem;
`

export const ModalTextDescription = styled.h1<{FirstColor?: boolean}>`
    font-size: 14px;
    ${({FirstColor,theme}) => FirstColor ? `
            color: ${theme.colors.modal.descriptionTextFirst};
        `:
        `
            color: ${theme.colors.modal.descriptionTextSecond};
        `
    } 
`

export const LineStyled = styled.hr`
    width: 60%;
    text-align:left;
    margin-block:.3rem;
    color:#959595;
`
export const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 1rem;
    width:90%;
`

export const AlignRowButtons = styled.div`
    display:flex;
    flex-direction: row;
    width: 60%; 
    justify-content: space-between;
`

export const AlignRowInputs = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`