import styled from "styled-components"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 95%;
    text-align: center;
`

export const ActivyAdvertsTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
    font-weight: 700;
`

export const AdvertsContainer = styled.div`
    padding-inline:1rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
`

export const AdvertButton = styled.button`
    margin-top: .5rem;
    padding-block: 0.5rem;
    padding-inline: 0.9rem;

`

export const AdvertsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height:9rem;
    padding-inline:.5rem;
`




export const AdvertContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding: .3rem;
    background-color:#EEEEEE;
    border: 1px solid #CDCDCD;
    border-radius: 10px;
    margin-bottom: .5rem;
    text-align: start;
`

export const AdvertProductImage = styled.div`
    span{
        border-radius: 10px;
    }
`

export const AdvertProductTitle = styled.h1`
    font-size: 12px;
    font-weight: 700;
    @media (max-width: 300px){
        font-size:10px;
    }
`

export const AdvertProductPrice = styled.h1`
    font-size: 12px;
    text-align: start;
    font-weight: 700;
    color:${({ theme }) => theme.colors.texts.description};
    @media (max-width: 300px){
        font-size:10px;
    }
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

