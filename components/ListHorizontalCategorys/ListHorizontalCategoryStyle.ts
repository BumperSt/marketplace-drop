import styled from "styled-components";


export const ListHorizontaltemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 0.5rem;
    overflow-x:hidden;
    margin-top: 0.5rem;
    @media (min-width: 768px){
        padding:0;
    }

`

export const ListItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: .5rem;
    
`

export const ListItemsTitle = styled.h1`
    font-weight: 700;
    
    @media (min-width: 768px){
        font-size: 36px;
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
    @media (min-width: 768px){
        padding-block: 0rem;
        margin-left: 0rem;
    }
`


export const ItemBackgroud = styled.div`
    position: relative;
    width: 7rem;
    height:5.5rem;
    @media(min-width: 768px){
        width: 6rem;
        height: 4.5rem;
    }
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
    @media (min-width: 768px){
        
        width:1rem;
        height:1rem;
    }
`

export const CategoryImage = styled.div`
    width:1.5rem;
    height:1.25rem;
    position:relative;
    @media (min-width: 768px){
        width:.8rem;
        height:.8rem;
    }
`
export const ItemCard  = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-right: 1rem;
    :hover{
        cursor:pointer;
    }
    @media (min-width: 768px){
        margin-right: .5rem;

    }
    
`
