import styled from "styled-components"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    text-align: center;
    align-items: center;
    width: 90%;

`

export const ActivyAdvertsTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
    font-weight: 700;
`

export const AdvertsContainer = styled.div`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    @media (min-width: 768px){
        width: 80%;
    }
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
    display: flex;
    flex-direction: column;
    padding-inline:.5rem;
    align-items: center;

`




export const AdvertContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    padding: .3rem;
    background-color:#EEEEEE;
    border: 1px solid ${({ theme }) => theme.colors.stroke};;
    border-radius: 10px;
    margin-bottom: .5rem;
    text-align: start;
    min-width: 90%;
    justify-content: space-between;


`

export const AdvertProductImage = styled.div`
    display: flex;
    margin-right: .5rem;
    width: 2rem;
    height: 1.5rem;
    @media (max-width: 768px) {
        span{
            border-radius: 10px;
        }
    }
    @media (min-width: 768px){
        width: 2rem;

    }
    position: relative;
`

export const AdvertProductTitle = styled.h1`
    font-size: 12px;
    font-weight: 700;
    margin-right: 1rem;
    @media (max-width: 300px){
        font-size:10px;
    }
    @media (min-width: 768px){
        font-size: 24px;
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
    @media (min-width: 768px){
        font-size: 24px;
    }
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction: column;
`

export const EditIcon = styled(FiEdit)`
    justify-self: flex-end;
    margin-right: .5rem;
    :hover{
        cursor: pointer;
    }

`

export const DeleteIcon = styled(RiDeleteBinLine)`
    justify-self: flex-end;
    margin-right: .5rem;
    :hover{
        cursor: pointer;
    }
`

export const AlignIcon = styled.div`
    display:flex;
    flex-direction:row;
`


export const AlingRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`