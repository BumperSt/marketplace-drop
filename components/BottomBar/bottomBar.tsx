import Image from "next/image"
import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title } from "./bottomBarStyle"

export const BottomBar = ({}) => {
    return(
        <Container>
            <Title>Quisque efficitur enim vel gravida sagittis.</Title>
            <Image title="Logo" alt="Logo Seliga no drop" width="408" height="145" src="/imagens/logo-bottomBar.webp"></Image>
            <DivColumn>
                <Image title="Iconei Discord" alt="Redirecionar Discord" width="82" height="82" src="/icons/discord.webp"></Image>

                <Image title="Iconei Instagram" alt="Redirecionar Instagram" width="82" height="82" src="/icons/instagram.webp"></Image>
            </DivColumn>
            <CopDiv>
                <CopTitle>Lorem ipsum.</CopTitle>
                <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>
            </CopDiv>
        </Container>
    )
}