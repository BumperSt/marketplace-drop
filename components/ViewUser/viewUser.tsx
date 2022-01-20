import Image from "next/image"
import { AlignColumn, Container, ProfileName, ProfilePicture } from "./viewUserStyled"
import {AvaliationStarts} from '@/components/AvalationStars/avaliationStarts'
export const ViewUser = () => {
    return(
        <Container>
            <ProfilePicture>
                <Image src="/temporary/Profile.png" width="80" height="80"/>
            </ProfilePicture>
            <AlignColumn>
                <ProfileName>Jonas Lanches</ProfileName>
                <AvaliationStarts avaliationValue={4.7}/>

            </AlignColumn>
            <Image src="/temporary/headIcon.png" width="32" height="32"/>
        </Container>
    )
}