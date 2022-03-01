import styled from "styled-components";


export const ListHorizontaltemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 0.5rem;
    overflow-x:hidden;
    margin-top: 0.5rem;


`

export const ListItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: .5rem;

`

export const ListItemsTitle = styled.h1`
    font-weight: 700;
    
    @media (min-width: 768px){
        font-size: 64px;
    }
    
;
`

export const ItemsScrollList = styled.div`
    display:flex;
    flex-direction:row;
    overflow: auto;
    margin-top:.5rem;
    padding-block: .5rem;
    margin-left: .5rem;

`


export const ItemBackgroud = styled.div<{Large?:boolean}>`
    width: ${({Large}) => Large ? '6.5rem' : '4.5rem'};
    height: ${({Large}) => Large ? '6.5rem' : 'auto'};
    position: relative;
`

export const ItemCard  = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-right: 1rem;
    :hover{
        cursor:pointer;
    }
    
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