import Image from "next/image"
import { AlignColumn, Container, ProfileName, ProfilePicture } from "./viewUserStyled"
import {AvaliationStarts} from '@/components/AvalationStars/avaliationStarts'

interface Props {
    style?:any,
    noIcon?:boolean,
    disableInDesktop?:boolean
}


export const ViewUser = ({style, noIcon, disableInDesktop} : Props) => {
    return(
        <Container style={style} disableInDesktop={disableInDesktop}>
            <ProfilePicture>
                <Image src="/temporary/Profile.png" width="160" height="160"/>
            </ProfilePicture>
            <AlignColumn >
                <ProfileName>Jonas Lanches</ProfileName>
                <AvaliationStarts  avaliationValue={4.7}/>
            </AlignColumn>
            {
                !noIcon &&
                <Image src="/temporary/headIcon.png" width="70" height="70"/>
            }
        </Container>
    )
}