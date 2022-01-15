import Image from "next/image"
import { HeadBarContainer, LoginButton } from "./headBarStyle"

export const HeadBar = () => {
    return(
        <HeadBarContainer>
            <Image title="Logo" alt="Logo" width="32" height="30" src="/icons/logo.webp"></Image>
            <LoginButton>Entrar</LoginButton>
        </HeadBarContainer>
    )
}