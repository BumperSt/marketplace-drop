import styled from "styled-components"


export const ProductTitle = styled.h1`
    font-weight:700;
    font-size:14px;
    margin-left:.5rem;
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

    padding-block:.3rem;
    justify-content: space-between;
    :last-child{
        border-bottom: 0px ;
    }
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
`

export const StyledLine = styled.hr`
    width: 100%;
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
`

export const PriceValue = styled.h1`
    font-size:18px;
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    font-weight: 700;
`
