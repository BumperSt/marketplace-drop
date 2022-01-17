import Image from "next/image"
import { useEffect } from "react"
import { AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, Container, DeleteIcon, EditIcon } from "./editOrExcludeAdvertsStyles"

export const EditOrExcludeAdverts = () => {

    return(
        <Container>
            <AdvertProductImage>
                <Image width="50" height="40" src="/temporary/itens.png"></Image>
            </AdvertProductImage>
            <AlignColumn>
                <AdvertProductTitle>NIKE SNEAKERS PRO STREET I</AdvertProductTitle>
                <AdvertProductPrice>R$ 1599,99</AdvertProductPrice>
            </AlignColumn>
            <AlignIcon>
                <EditIcon size="16"/>
                <DeleteIcon  size="16"/>
            </AlignIcon>
        </Container>
    )
}