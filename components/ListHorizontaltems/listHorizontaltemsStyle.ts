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
    padding-block: .3rem;
`

export const ItemCard  = styled.div<{Large?:boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width:${({Large}) => Large ? '6rem' : '4.5rem'};
    margin-right: 1rem;
    
`

export const ItemBackgroud = styled.div`
    width: 100%;
    height: 80%;
`

export const ItemTitle = styled.h1`
    font-size:12px;
    @media (min-width: 768px){
        font-size:24px;
    }
    margin-top:.3rem;
`