import { FaStore, FaTruckMoving, FaUserAlt } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { GiImperialCrown } from "react-icons/gi"
import { RiAdvertisementFill } from "react-icons/ri"

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContainerOpenInDesktop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: start;

`

export const ProfileName = styled.h1`
    font-weight: 600;
    font-size: 24px;
    color:${({ theme }) => theme.colors.fonts[0]};
    margin-block:2rem;
 

`

export const AlingProfileAndIcon = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;

`

export const ProfilePageButton = styled.button<{active?:boolean}>`
    color:${({ theme }) => theme.colors.fonts[0]};
    background-color: ${({ theme}) => theme.colors.profilePageButtonBackground};
    width: 80%;
    font-size:18px;
    font-weight: 700;
    align-items: center;
    display:flex;
    padding-block: 1rem;
    padding-inline: .5rem;
    margin-top: 1rem;
    @media (min-width: 768px){
        background-color: white;
        border-radius: 10px;
        padding-block:.4rem;
        margin-block: .2rem;
        ${({active}) => active && 'border:solid 1px #cdcdcd;'}
        :hover{
            border:solid 1px #cdcdcd;
        }
    }
`

export const StoreIcon = styled(FaStore)`
    fill: ${({ theme}) => theme.colors.shoesSizeBackground};
    margin-right: .8rem;
    @media (min-width: 768px){
        margin-right: .3rem;
    }
`
export const TemporaryCrown = styled(GiImperialCrown)`
    margin-inline:.5rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`
export const UserIcon = styled(FaUserAlt)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
    @media (min-width: 768px){
        margin-right: .3rem;
    }
`
export const AdIcon = styled(RiAdvertisementFill)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
    @media (min-width: 768px){
        margin-right: .3rem;
    }
`
export const TruckIcon = styled(FaTruckMoving)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
    @media (min-width: 768px){
        margin-right: .3rem;
    }
`
export const LogoutIcon = styled(FiLogOut)`
    stroke: #EA0000;
    margin-right: .3rem;
`

export const AlingMenuInCollum = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100%;
    @media (min-width: 768px){
        border-right: 1px #CDCDCD solid;
    }
`