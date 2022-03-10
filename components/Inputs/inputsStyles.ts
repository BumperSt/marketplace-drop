import styled from "styled-components";

export const InputContainer = styled.div<{inputType : string, createAccont:boolean}>`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    margin-top: .5rem;
    width: 100%;
    padding-inline: .5rem;

    ${({inputType}) => 

        inputType == 'uf' ? {
            width:'30%'
        } 
        : 
        inputType == 'city' &&  {
            width:'70%'
        }

    }

    @media (min-width: 768px) {
        margin-top: .3rem;

        width: 50%;
        ${({inputType}) => 
            inputType == 'uf' ? {
                width:'30%'
            }
            :
            inputType == 'andress' && {
                width:'70%'
            }
        }
        ${({createAccont}) => createAccont && {
            width:'100%'
        }}
    }
`

export const InputStyled = styled.input`
    color:${({theme}) => theme.colors.detalhes};
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    width: 100%;
    font-size: 14px;
    border-radius: 15px;
    padding-inline: .5rem;
    font-weight: 600;
    padding-block: .5rem;
    border: 0px;
    margin-block:.4rem;
    @media (min-width: 768px){
        font-size: 24px;
        padding:.2rem;
        border-radius: 25px;    
    }
`

export const InputTitle = styled.h1`
    font-size: 15px;
    color:${({ theme }) => theme.colors.detalhes};
    font-weight: bold;
    color:black;
    width: 100%;
`