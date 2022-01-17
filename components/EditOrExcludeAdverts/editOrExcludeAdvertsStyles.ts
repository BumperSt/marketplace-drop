import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding: .3rem;
    background-color:#EEEEEE;
    border: 1px solid #CDCDCD;
    border-radius: 10px;
    margin-bottom: .5rem;
`

export const AdvertProductImage = styled.div`
    span{
        border-radius: 10px;
    }
`

export const AdvertProductTitle = styled.h1`
    font-size: 12px;
    font-weight: 700;
`

export const AdvertProductPrice = styled.h1`
    font-size: 12px;
    text-align: start;
    font-weight: 700;
    color:${({ theme }) => theme.colors.texts.description};
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
`

export const EditIcon = styled(FiEdit)`
    justify-self: flex-end;
    margin-right: .5rem;

`

export const DeleteIcon = styled(RiDeleteBinLine)`
    justify-self: flex-end;
    margin-right: .5rem;

`

export const AlignIcon = styled.div`
    display:flex;
    flex-direction:row;

`

