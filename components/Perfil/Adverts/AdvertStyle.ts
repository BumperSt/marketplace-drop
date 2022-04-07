import styled from "styled-components"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
export const Container = styled.div`
    position: fixed;
    overflow-y: auto;
    display: flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

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
    margin-block: 1rem;    
    padding-block: 0.5rem;
    padding-inline: 0.9rem;

`

export const AdvertsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height:10rem;
    display: flex;
    flex-direction: column;
    padding-inline:.5rem;
    align-items: center;

`




export const AdvertContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    text-align: start;
    justify-content: space-between;

    padding-block:.5rem;
    padding-inline:.8rem;
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    border-radius: 10px;
    margin-bottom: .5rem;
    min-width: 90%;

`

export const AdvertProductImage = styled.div`
    display: flex;
    margin-right: .5rem;
    width: 2rem;
    height: 2rem;
    
    @media (max-width: 768px) {
        span{
            border-radius: 60px;
        }
    }
    @media (min-width: 768px){
        width: 2rem;

    }
    position: relative;
`

export const AdvertProductTitle = styled.h1`
    color:${({theme}) => theme.colors.fonts[0]};
    font-size: 13px;
    font-weight: 700;
    margin-bottom: .2rem;
    @media (max-width: 300px){
        font-size:10px;
    }
    @media (min-width: 768px){
        font-size: 24px;
    }
`

export const AdvertProductPrice = styled.h1`
    color:black;
    font-size: 13px;
    text-align: start;
    font-weight: 900;
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
export const Arrow = styled(MdArrowForwardIos)`
    fill:${({theme}) => theme.colors.detalhes};
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

export const SelectAdvertTypeText = styled.h1`
    font-weight: 900;
    margin-inline: .25rem;
    font-size: 14px;
    color:${({ theme}) => theme.colors.fonts[0]}
`