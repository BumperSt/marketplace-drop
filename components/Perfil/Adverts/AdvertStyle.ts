import styled from "styled-components"
import { MdArrowForwardIos } from "react-icons/md";

export const Container = styled.div`
    overflow-y: auto;
    display: flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (min-width: 768px){
        position: relative;
        width: 100%;
        height: auto;
        margin:0rem;
        
    }
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
        box-shadow:none;
        border:solid 1px ${({theme}) => theme.colors.stroke};
        border-top: 0px;
        margin:0px;
        border-radius: 0px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 90%;
        padding-block:.2rem;

    }
`

export const AdvertButton = styled.button`
    margin-block: 1rem;    
    padding-block: 0.5rem;
    padding-inline: 0.9rem;
    @media(min-width: 768px){
        font-size:13px;
        margin-block: .2rem;    

        padding-block: 0.25rem;
        padding-inline: 0.5rem;
    }

`

export const AdvertsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height:10rem;
    display: flex;
    flex-direction: column;
    padding-inline:.5rem;
    align-items: center;
    @media (min-width: 768px){
        max-height:6rem;
    }
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
    @media (min-width: 768px){
        padding-block:.2rem;
        padding-inline:.3rem;
        margin-bottom: .25rem;

    }
    :hover{
        cursor: pointer;
    }

`

export const AdvertProductImage = styled.div`
    display: flex;
    margin-right: .5rem;
    width: 2rem;
    height: 2rem;

    @media (min-width: 768px){
        width: 1rem;
        height: 1rem;

        span{
            border-radius: 60px;
        }
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
        font-size: 13px;
        margin-bottom: .1rem;
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
        font-size: 13px;
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

export const AlingRowSwithAndText = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    @media(min-width: 768px){
        border: 1px solid ${({theme}) => theme.colors.stroke};
        border-bottom: 0px;
        width: 90%;
        justify-content: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-top: .5rem;
    }
`


export const SelectAdvertTypeText = styled.h1`
    font-weight: 900;
    margin-inline: .25rem;
    font-size: 14px;
    color:${({ theme}) => theme.colors.fonts[0]};
    
`