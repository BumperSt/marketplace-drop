import styled from "styled-components";

export const ListHorizontaltemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:1rem;
    overflow-x:hidden;
`

export const ListItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: .5rem;
`

export const ListItemsTitle = styled.h1`
    font-weight: 700;
;
`

export const ItemsScrollList = styled.div`
    display:flex;
    flex-direction:row;
    overflow: auto;
    margin-top:.5rem;
`

export const ItemCard  = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width:4.5rem;
    margin-right: 1rem;
`

export const ItemBackgroud = styled.div`
    width: 100%;
    height: 80%;
`

export const ItemTitle = styled.h1`
    font-size: ${({ theme}) => theme.fontSize.normal};
    font-size:14px;
    margin-top:.3rem;


`