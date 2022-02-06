import styled from "styled-components";
import { MdKeyboardBackspace } from 'react-icons/md';
import { RiShutDownLine } from 'react-icons/ri';

export const AlignRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    text-align: center;
    position:relative;
    @media (min-width: 768px) {
        padding-inline: 2rem;
    }
`

export const CenterText = styled.h1`
    color:${({ theme }) => theme.colors.detalhes};
    width:100%;
    left: 0;
    position: absolute;
    font-size: 18px;
    @media (max-width: 300px){
        font-size:.8rem;
    }
    @media (min-width: 768px) {
        font-size:48px;
    }
`

export const BackIcon = styled(MdKeyboardBackspace)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 99;
    :hover{
        cursor: pointer;
    }

`
export const LogoutIcon = styled(RiShutDownLine)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 99;
    :hover{
        cursor: pointer;
    }

`