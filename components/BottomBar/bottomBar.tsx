import Image from "next/image"
import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title } from "./bottomBarStyle"

export const BottomBar = ({}) => {
    return(
        <Container>
            <Title>Quisque efficitur enim vel gravida sagittis.</Title>
            <Image title="Logo" alt="Logo Seliga no drop" width="155" height="55" src="/temporary/logo.png"></Image>
            <DivColumn>
                <Image title="Iconei Discord" alt="Redirecionar Discord" width="23" height="23" src="/temporary/Discord.png"></Image>

                <Image title="Iconei Instagram" alt="Redirecionar Instagram" width="23" height="23" src="/temporary/Instagram.png"></Image>
            </DivColumn>
            <CopDiv>
                <CopTitle>Lorem ipsum.</CopTitle>
                <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>
            </CopDiv>
        </Container>
    )
}