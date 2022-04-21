import styled from "styled-components"



export const ItemCard  = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-right: 1rem;
    margin-top: .5rem;
    :hover{
        cursor:pointer;
    }
    @media (min-width: 768px){
        margin-right: 0.5rem;

    }
`

export const ItemBackgroud = styled.div<{Large?:boolean}>`
    width: ${({Large}) => Large ? '6.5rem' : '4.5rem'};
    height: ${({Large}) => Large ? '6.5rem' : 'auto'};
    position: relative;

    @media (min-width: 768px){
        width: ${({Large}) => Large ? '4.5rem' : '3.5rem'};
        height: ${({Large}) => Large ? '4.5rem' : 'auto'};

    }
    
`


export const ItemTitle = styled.h1`
    font-size:12px;
    font-weight: 500;
    margin-top:.3rem;
    @media (min-width: 768px){
        font-size:24px;
        font-weight: 700;
        margin-top:0rem;

    }
`

export const VipItemDiv = styled.div`
    display:flex;
    flex-direction: column;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.vipAnuncioBackground};
    @media (min-width: 768px){
        padding-block:.2rem;
        padding-inline:.3rem;
    }
`

export const VipItemTitle = styled.h1`
    font-weight:600;
    font-size:9px;
    @media (min-width: 768px){
        font-size:14px;
    }
`

export const VipItemPrice = styled.h1`
    font-weight:900;
    font-size:14px;
    @media (min-width: 768px){
        font-size:18px;
    }
`

export const AlingRowVipSizeAndPrice = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:.15rem;
    @media (min-width: 768px){

    }
    
`

export const VipSize = styled.div`
    background-color: ${({ theme }) => theme.colors.shoesSizeBackground};
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:9px;
    font-weight: 900;
    padding: .15rem;
    margin-left: .3rem;
    border-radius:5px;
    @media (min-width: 768px){
        font-size:10px;
        padding: .025rem;
        padding-inline: .06rem;
        margin-left: .15rem;


    }
`

export const AlignVipSize = styled.div`
    display:flex;
    flex-direction: row;
`