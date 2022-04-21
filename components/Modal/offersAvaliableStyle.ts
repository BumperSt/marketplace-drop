import styled from "styled-components"


export const ProductTitle = styled.h1`
    font-weight:700;
    font-size:14px;
    margin-left:.8rem;
`

export const OffersContainer = styled.div`
    padding-block:.5rem;
    margin-bottom:.8rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow-y: auto;
    @media (max-height: 600px) {
        padding-inline:.2rem;

    }

`

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline:.5rem;
    width: 90%;
    align-self: center;
    padding-block:.3rem;
    justify-content: space-between;
    
`
export const SizeButton = styled.div`
    margin-inline:.1rem;
    padding-inline:.4rem;
    padding-block:.2rem;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    color:white;
    @media(min-width: 768px){
        font-size:14px;
        font-weight: 900;
        padding-inline:.1rem;
        padding-block:.05rem;

    }
`

export const StyledLine = styled.hr`
    width: 95%;
    align-self: center;
    margin-bottom: .25rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`

export const ProductImage = styled.div`
    font-size: 18px;
    width:1.4rem;
    height:1.2rem;
    font-weight: 700;
    border-radius: 5px;
    position: relative;
    span{
        border-radius: 4px;
    }
    @media(min-width: 768px){
        width:1rem;
        height:.8rem;  
    }
`

export const PriceValue = styled.h1`
    font-size:18px;
    font-weight: 700;
`
