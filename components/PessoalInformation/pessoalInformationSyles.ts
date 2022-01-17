import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    width: 95%;
`

export const PessoalInformationTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
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
`

export const ContainerInformation = styled.div`
    padding-inline:1.5rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
`

export const InformationTitle = styled.h1`
    font-size:12px;
    margin-bottom:.4rem;
    font-weight: 400;
    margin-top:.8rem;

`

export const InformationValue = styled.h1`
    font-size:14px;
    font-weight: 600;
    margin-bottom:.8rem;
    padding-left: .1rem;

`

export const InformationAlignCollum = styled.div`
    
`

export const InfromationAlignRow = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
`