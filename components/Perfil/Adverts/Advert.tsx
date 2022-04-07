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
                    <AdvertProductTitle>{anuncio.title}</AdvertProductTitle>
                    <AdvertProductPrice>R$ {anuncio.price}</AdvertProductPrice>
                </AlignColumn>
                {
                    setOpenEditAdvert &&
                        <Arrow size={20}/>
                }
                
            </AlingRow>
            <AlignIcon>
            </AlignIcon>
        </AdvertContainer>
    )
}