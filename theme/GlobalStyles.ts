import styled, { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }:any) =>  theme.colors.body};
    color: ${({ theme }) => theme.colors.texts.default};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    margin:0;
  }

  *{
    font-family:'Roboto';
    font-weight: 500;
    font-size: 24px;
    margin:0;
    box-sizing: border-box;
    @media (min-width: 768px) {
      font-size:64px;

    }
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  button {
    border: 0;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    font-family: ${({ theme }) => theme.font};
    border-radius: 10px;
    font-weight: 700;
  }
`
