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
`

export const CenterText = styled.h1`
    color:${({ theme }) => theme.colors.head.textAndIcons};
    width:100%;
    position: absolute;
`

export const BackIcon = styled(MdKeyboardBackspace)`
    color:${({ theme }) => theme.colors.head.textAndIcons};
    z-index: 99;

`
export const LogoutIcon = styled(RiShutDownLine)`
    color:${({ theme }) => theme.colors.head.textAndIcons};
    z-index: 99;

`