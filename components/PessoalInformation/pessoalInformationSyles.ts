import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 90%;
    @media (min-width: 768px) {
        width: 60%;
        margin-top: 0rem;
        height: 100%;
    }
`

export const PessoalInformationTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
    @media(min-width: 768px){
        padding: .5rem;
        background-color:white;
        width: 100%;
        text-align: center;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        font-size:36px;
        text-align:start;
        padding-inline:1rem;
        
        
    }
    font-weight: 700;

`
export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    
    position:relative;
`

export const EditIcon = styled(FiEdit)`
    justify-self: flex-end;
    position: absolute;
    right:.5rem;
    :hover{
        cursor: pointer;
    }
`

export const ContainerInformation = styled.div`
    padding-inline:1rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    @media (min-width: 768px) {
        margin-top:0px;
        border-top-left-radius:0px;
        border-top-right-radius:0px;
        height: 100%;

    }

`

export const InformationTitle = styled.h1`
    font-size:12px;
    margin-bottom:.4rem;
    font-weight: 400;
    margin-top:.8rem;
    @media (max-width: 300px){
        font-size:11px;

    }
    @media (min-width: 768px) {
        margin-top: 0rem;
        font-size:24px;

    }


`

export const InformationValue = styled.h1`
    font-size:14px;
    font-weight: 600;
    margin-bottom:.8rem;
    @media (max-width: 300px){
        font-size:12px;
    }
    @media (min-width: 768px) {
        font-size:26px;

    }
`

export const InformationAlignCollum = styled.div`
    
`

export const InfromationAlignRow = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
`