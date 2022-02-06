import styled from "styled-components";

export const HeadBarContainer = styled.div<{otherBackgroundColor?: boolean}>`
    position: sticky;
    top: 0;
    z-index: 99;
    color:${({ theme }) => theme.colors.texts.default};
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .7rem;
    background-color: ${({theme,otherBackgroundColor }) => otherBackgroundColor ? theme.colors.sellerPage.background : theme.colors.body};
    min-height: 10%;
    max-height: 10%;
    @media (min-width: 768px) {
        padding: .5rem;

    }
`

export const LoginButton = styled.button`
    padding-inline: 1rem;
    @media (min-width: 768px){
        padding-inline: 1rem;
        padding-block: .2rem;
        font-size: 36px;
    }
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`

export const LoggedTitle = styled.h1`
    margin-right: 0.2rem;
    font-size: 16px;
    @media (min-width: 768px) {
        font-size:36px;
    }
`

export const LoggedTitleColor = styled.span`
    color:orange;
    font-size: 16px;
    @media (min-width: 768px) {
        font-size:36px;
    }
`

export const LogoImagem = styled.div`
    :hover{
        cursor: pointer;
    }
    width: 40px;
    
    @media (min-width: 768px) {
        width: 80px;
        
    }
    span {
    position: unset !important;
        img {
        object-fit: contain;
        width: 40px !important;
        @media (min-width: 768px) {
            width: 80px;
        }
        position: relative !important;
        height: unset !important;
        }
    }
`