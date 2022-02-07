import styled from "styled-components";
export const ProductImagensDiv = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    padding-inline: 1rem;
    @media (min-width: 768px){
        flex-direction:column;
        align-items:center;
        padding-inline:0rem;

    }
`

export const ListImage = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 1rem;

    justify-content: center;
    @media (min-width: 768px){
        flex-direction:row;
        margin-left: 0rem;
        justify-content: space-between;
        width: 7.5rem;

    }
`

export const ImageDiv = styled.div`
    display: flex;
    span{border-radius: 10px;}
    margin-block: .5rem;
    @media(min-width: 768px){
        margin-block:.1rem;
    }
    position:relative;
    width: 7.5rem;
    height: 7rem;
    

`
export const SmallImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-block: .2rem;
    position:relative;
    width: 2rem;
    height: 1.8rem;
    @media (min-width: 768px) {
        width: 2.2rem;
        height: 2rem;

    }
`