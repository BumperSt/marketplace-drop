import styled from "styled-components";

export const HeadBarContainer = styled.div`
    color:${({ theme }) => theme.colors.text};
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .7rem;
    background-color: ${({ theme }) => theme.colors.head.background};
    position: sticky;
    top: 0;
    z-index: 99;
`

export const LoginButton = styled.button`
    padding-inline: 1rem;
`