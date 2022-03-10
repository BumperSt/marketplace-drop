import { FaStore, FaTruckMoving, FaUserAlt } from "react-icons/fa"
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

export const ProfilePageButton = styled.button`
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
`

export const StoreIcon = styled(FaStore)`
    fill: ${({ theme}) => theme.colors.shoesSizeBackground};
    margin-right: .8rem;
`
export const TemporaryCrown = styled(GiImperialCrown)`
    margin-inline:.5rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`
export const UserIcon = styled(FaUserAlt)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`
export const AdIcon = styled(RiAdvertisementFill)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`
export const TruckIcon = styled(FaTruckMoving)`
    margin-right: .8rem;
    fill:${({ theme}) => theme.colors.shoesSizeBackground};
`