import styled from "styled-components";
import {BsPlusCircleFill, BsFillDashCircleFill} from 'react-icons/bs'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
export const InputContainer = styled.div<{fontColor?: string}>`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    width: 100%;
    padding-inline: .5rem;
    margin-top:.5rem;
    color: ${({fontColor, theme}) => fontColor == 'secondary' ? theme.colors.fonts[0] : theme.colors.detalhes};
    ${({fontColor}) => fontColor == 'secondary' &&  
        `
            h1{
                font-size:14px; 
                font-weight:700;
            }
            input{
                font-weight:700;
            }
            select {
                font-weight:700;
            }
        `
    }
    @media (min-width: 768px) {
        margin-top: .3rem;
        width: 50%;
    }
`

export const InputStyled = styled.input`
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    width: 100%;
    font-size: 14px;
    border-radius: 15px;
    padding-inline: .5rem;
    font-weight: 600;
    padding-block: .5rem;
    border: 0px;
    @media (min-width: 768px){
        font-size: 24px;
        padding:.2rem;
        border-radius: 25px;    
    }
`

export const TextAreaStyled = styled.textarea`
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    width: 100%;
    font-size: 14px;
    min-height:4.5rem;
    border-radius: 5px;
    padding-inline: .5rem;
    font-weight: 600;
    padding-block: .5rem;
    border: 0px;
    @media (min-width: 768px){
        font-size: 24px;
        padding:.3rem;
        min-height:2rem;
        font-size: 14px;
        border-radius: 25px;    
    }
`

export const SelectStyled = styled.select`
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    width: 100%;
    font-size: 14px;
    border-radius: 15px;
    padding-inline: .5rem;
    font-weight: 600;
    padding-block: .5rem;
    border: 0px;
    @media (min-width: 768px){
        font-size: 24px;
        padding:.2rem;
        border-radius: 25px;    
    }
`

export const InputTitle = styled.h1`
    font-size:12px;
    padding-block:.5rem;
    width: 100%;
    text-align: start;
`

export const ConditionDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border:solid 1px ${({theme}) => theme.colors.stroke};
    border-radius: 5px;
    align-items: center;
    padding-inline: 1rem;
    padding-block:.5rem;
    min-width:8rem;
    h1{
        font-size: 24px;
        font-weight: 900;
        color:${({ theme}) => theme.colors.fonts[1]}
    }
`

export const PlusIcon = styled(FiPlusCircle)`
    margin-inline:.5rem;
    stroke:white;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`

export const LessIcon = styled(FiMinusCircle)`
    margin-inline:.5rem;
    stroke:white;

    fill:${({ theme}) => theme.colors.shoesSizeBackground};

`


export const ToglleThemeDiv = styled.div`
    align-items:center;
    display:flex;
    flex-direction: row;
    border: solid 1px #CDCDCD;
    border-radius: 40px;
    padding: .1rem;
    
    width: 50px;
    margin-inline:.2rem;
    :hover{
        cursor: pointer;
    }
    @media (min-width: 768px){
        height: .5rem;
        width: 1rem;
        padding: .1rem;

    }
`

export const SwitchBall = styled.div<{checked:boolean}>`

    width:16px;
    height:16px;
    background-color:#EEEEEE;
    border-radius:12px;
    transition: all .6s linear;

    ${({checked}) => checked && `
        margin-left: 62.5%;
    `}

    @media(min-width: 768px){
        ${({checked}) => checked && `
            margin-left: 50%;
            transform: translateX(50%);
        `}
    }
 
`