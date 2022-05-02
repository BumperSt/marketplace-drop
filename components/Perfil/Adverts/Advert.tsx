import Image from "next/image"
import { AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText } from "./AdvertStyle"

interface Props {
    anuncio: any
    setOpenEditAdvert?: any
}

export const Advert = ({anuncio, setOpenEditAdvert} : Props) => {
    return (
        <AdvertContainer  onClick={() => setOpenEditAdvert && setOpenEditAdvert(true)}>
            <AlingRow>
                <AdvertProductImage>
                    <Image layout="fill" objectFit="cover" src="/temporary/itens.png"/>
                </AdvertProductImage>
                <AlignColumn>
                    <AdvertProductTitle>{anuncio.name}</AdvertProductTitle>
                    <AdvertProductPrice>R$ {anuncio.value}</AdvertProductPrice>
                </AlignColumn>
            </AlingRow>
            {
                setOpenEditAdvert &&
                    <Arrow size={20}/>
            }
        </AdvertContainer>
    )
}