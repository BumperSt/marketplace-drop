import styled from "styled-components";

export const HeadBarContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
    color:${({ theme }) => theme.colors.texts.default};
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .7rem;
    background-color: ${({ theme }) => theme.colors.head.background};
    min-height: 10%;
    max-height: 10%;
`

export const LoginButton = styled.button`
    padding-inline: 1rem;
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

export const LoggedTitle = styled.h1`
    margin-right: 0.2rem;
    font-size: 16px;
`

export const LoggedTitleColor = styled.span`
    color:orange;
    font-size: 16px;
`