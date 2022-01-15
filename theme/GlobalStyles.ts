import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }:any) =>  theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    margin:0;

  }

  *{
    font-family:'Roboto';
    font-weight: 500;
    font-size: 24px;
    margin:0;
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
    border-radius: 12px;
    font-weight: 500;
  }


`