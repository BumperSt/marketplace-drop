import styled from "styled-components";
export const ProductImagensDiv = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
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
    position:relative;
    span{border-radius: 10px;}
    margin-block: .5rem;
    @media(min-width: 768px){
        margin-block:.1rem;
    }
    width: 9rem;
    height: 8rem;
`
export const SmallImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-block: .2rem;
    position:relative;
    width: 1.7rem;
    height: 1.5rem;
    @media (min-width: 768px) {
        width: 2.2rem;
        height: 2rem;

    }
`