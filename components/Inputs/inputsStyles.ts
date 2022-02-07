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
    border-radius: 15px;
    margin-block:.3rem;
    padding:.3rem;
    font-size:14px;
    color:${({ theme }) => theme.colors.detalhes};
    font-weight: 300;
    border: solid 1px ${({ theme }) => theme.colors.stroke};;
    width: 100%;
    
    @media (min-width: 768px){
        font-size: 24px;
        border: solid 5px ${({ theme }) => theme.colors.stroke};;
        padding:.2rem;
        border-radius: 25px;    

    }
`

export const InputTitle = styled.h1`
    font-size: 15px;
    font-weight: bold;
    color:black;
    width: 100%;
`