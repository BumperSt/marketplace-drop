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
    margin-left: .5rem;

`


export const ItemBackgroud = styled.div`
    width: 7rem;
    height:  7rem;
    position: relative;
`

export const CategoryImageDiv = styled.div`
    position: absolute;
    background-color:white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 5%;
    width:2rem;
    height:2rem;
    z-index:1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`

export const CategoryImage = styled.div`
    width:1.5rem;
    height:1.25rem;
    position:relative;
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
