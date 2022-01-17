import Image from "next/image"
import { AlignColumn, AlignRow, AvaliationValue, Container, ProfileName, ProfilePicture, Star } from "./viewUserStyled"

export const ViewUser = () => {
    return(
        <Container>
            <ProfilePicture>
                <Image src="/temporary/Profile.png" width="80" height="80"/>
            </ProfilePicture>
            <AlignColumn>
                <ProfileName>Jonas Lanches</ProfileName>
                <AlignRow>
                    <Star size="15"/>
                    <Star size="15"/>
                    <Star size="15"/>
                    <Star size="15"/>
                    <Star size="15"/>
                    <AvaliationValue>4.7</AvaliationValue>
                </AlignRow>
            </AlignColumn>
            <Image src="/temporary/headIcon.png" width="32" height="32"/>
        </Container>
    )
}