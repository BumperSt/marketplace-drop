import { AiTwotoneStar } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { MdReportProblem } from "react-icons/md";
import styled from "styled-components";



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    padding-inline:8%;
    text-align: start;
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction:column;
    text-align: start;
    align-items: start;
    position:relative;
    width:100%;
    padding-inline: 1rem;
    @media (min-width: 768px){
        padding-left: 1rem;



    }
    
`




export const AlignRow = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    margin-top: .5rem;

`



export const ProductTitle = styled.h1`
    font-size: 18px;
    font-weight: 700;
    max-width: 75%;
    @media (min-width:768px){
        font-size: 48px;
        max-width: 100%;

    }
`

export const ShareIcon = styled(FiShare2)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 50;
    @media (min-width:768px){
        display:none;
    }

`

export const ProductSubTitle = styled.h1`
    font-size: 12px;
    font-weight: 400;
    @media (min-width:768px){
        font-size:36px;
    }
`

export const ProductSize = styled.div`
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    color:white;
    font-size: 12px;
    font-weight: 700;
    border-radius:5px;
    padding-inline:.3rem;
    padding-block:.2rem;
    margin-right:.1rem;
`

export const ProductPrice = styled.h1`
    font-size: 36px;
    margin-top: .5rem;
    @media (min-width:768px){
        font-size: 72px;
    }
`

export const BuyButton = styled.button`
    border-radius: 10px;
    padding-inline: 1rem;
    padding-block: .5rem;
    font-weight: 900;
    align-self: center; 
    margin-top: 0.5rem;
    @media (min-width: 768px) {
        font-size:36px;
    }
`

export const ProductDescreptionDiv = styled.div`
    margin-top: 1rem;
    display:flex;
    flex-direction: column;
    
    text-align: start;
`

export const DescreptionTitle = styled.h1`
    font-weight: 600;
    font-size: 12px;
    margin-bottom:.5rem;
    @media (min-width:768px){
        font-size: 36px;
    }
`




export const DescreptionText = styled(DescreptionTitle)`
    font-weight: 400;
    font-size: 12px;

    @media (min-width:768px){
        font-size: 24px;
    }
`



export const ToReportDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-self: center;
    align-items: end;
    margin-block:1rem;
`

export const ToReportIcon = styled(MdReportProblem)`

`

export const ToReportText = styled.h1`
    font-size:12px;
    font-weight: 500;
    margin-left: .2rem;
`


export const AlignCollum = styled.div`
    display:flex;
    flex-direction:column;
`

export const AlignCollumReverseDesktop = styled.div`
    display:flex;
    
    flex-direction:column;
    @media(min-width: 768px){
        flex-direction:column-reverse;
    }
`

export const AlingRowInDesktop = styled.div`
    display:flex;
    flex-direction:column;
    @media(min-width: 768px){
        flex-direction:row-reverse;
        width:100%;
        justify-content:center;
        text-align: center;
    }
`

export const Tag = styled.div`
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight: 500;
    font-size: 12px;
    padding-block:.5rem;
    padding-inline:.4rem;
    border-radius: 15px;
    margin-right: .5rem;   
`

export const AboutSeller = styled.div`
    display:flex;
    padding:.5rem;
    flex-direction:column;
    margin-top: 1rem;
    border: solid 1px ${({ theme }) => theme.colors.stroke};
    border-radius: 5px;
`

export const AboutSellerTitle = styled.h1`
    font-size: 12px;
    font-weight: 700;
`
export const StoreName = styled.h1`
    font-size:10px;
    font-weight:600;
`

export const SeeStore = styled.button`
    background-color: white;
    color:black;
    border: solid 1px ${({ theme }) => theme.colors.stroke};
    font-size: 10px;
    font-weight: 900;
    width: 40%;
    
`