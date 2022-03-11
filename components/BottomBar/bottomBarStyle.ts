import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bottomBarBackgroud};
    text-align: center;
    margin-top: 1rem;
    padding:1rem;
    align-items: center;
    
`

export const Title = styled.h1`
    font-size: 12px;
    width: 300;
    margin-bottom: .5rem;
    @media (min-width: 768px){
        font-size: 48px;
    }
    color:white;
`

export const DivColumn = styled.div`
    margin-top: .8rem;
    width:20%;
    justify-content: center;
    display:flex;
    flex-direction: row;
    @media (min-width: 768px){
        margin-top: 1rem;
    }
`
export const CopDiv = styled.div`
    text-align: start;
    margin-top: .8rem;

`

export const CopTitle = styled.h1`
    font-size: 11px;
    font-weight: 600;
    margin-bottom: .2rem;
    @media (min-width: 768px){
        font-size: 48px;
        margin-bottom: .2rem;

    }
    color:white;
`   



export const CopDescription = styled.h1`
    font-size:9px;
    max-width:60%;
    @media (min-width: 768px){
        font-size: 36px;
    }
    color:#CDCDCD;
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

`



export const LogoImage = styled.div`
    position:relative;
    width:5rem;
    height:2rem;
    margin-block: .8rem;
`

export const IconImage = styled.div`
    position:relative;
    width:1rem;
    height:1rem;
    :hover{
        cursor: pointer;
    }
`

export const MoreInfoButton = styled.button`
    padding-inline: 1.2rem;
    padding-block: .8rem;
    border-radius: 60px;
    margin-top:.5rem;
    font-size:18px;
`

export const MoonIcon = styled(FaMoon)`
`

export const SunIcon = styled(FaSun)`
`

export const AlingRowToggleTheme = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`