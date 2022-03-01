import styled from "styled-components"



export const ItemCard  = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-right: 1rem;
    :hover{
        cursor:pointer;
    }
    
`

export const ItemBackgroud = styled.div<{Large?:boolean}>`
    width: ${({Large}) => Large ? '6.5rem' : '4.5rem'};
    height: ${({Large}) => Large ? '6.5rem' : 'auto'};

    
    position: relative;
`


export const ItemTitle = styled.h1`
    font-size:12px;
    font-weight: 500;
    @media (min-width: 768px){
        font-size:24px;
    }
    margin-top:.3rem;
`

export const VipItemDiv = styled.div`
    display:flex;
    flex-direction: column;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.vipAnuncioBackground};
`

export const VipItemTitle = styled.h1`
    font-weight:600;
    font-size:9px;
    font-weight: 500;
    @media (min-width: 768px){
        font-size:24px;
    }
`

export const VipItemPrice = styled.h1`
    font-weight:900;
    font-size:14px;
    @media (min-width: 768px){
        font-size:24px;
    }
`

export const AlingRowVipSizeAndPrice = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:.15rem;
    
`

export const VipSize = styled.h1`
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    color:white;
    font-size:9px;
    padding:3px;
    margin-left: .3rem;
    border-radius:5px;
    
`

export const AlignVipSize = styled.div`
    display:flex;
    flex-direction: row;
`