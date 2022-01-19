import { ActivyAdvertsTitle, AdvertButton, AdvertsContainer, AdvertsScroll, Container, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer, DeleteIcon, EditIcon } from "./activyAdvertsStyle"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ModalToManageAdvert } from "../Modal/modalToManageAdvert"
export const ActivyAdverts = () => {

    const [anuncios, SetAnuncions] = useState(null)
    const [openEditAdvert, setOpenEditAdvert] = useState(false)

    useEffect(() => {
        let tempAnuncions = []
        for (let index = 0; index < 20; index++) {
            tempAnuncions.push({
                'title' : 'NIKE SNEAKERS PRO STREET I',
                'price' : '1599,99',
                'id' : index
            })
        }
        SetAnuncions(tempAnuncions)
    }, [])


    return(
        <Container>
            <ActivyAdvertsTitle>Anuncios Ativos</ActivyAdvertsTitle>
            <AdvertsContainer>
                <AdvertsScroll>
                    {
                        anuncios &&
                        anuncios.map((anuncio) => (
                            <AdvertContainer key={anuncio.id}>
                                <AdvertProductImage>
                                    <Image width="50" height="40" src="/temporary/itens.png"/>
                                </AdvertProductImage>
                                <AlignColumn>
                                    <AdvertProductTitle>{anuncio.title}</AdvertProductTitle>
                                    <AdvertProductPrice>R$ {anuncio.price}</AdvertProductPrice>
                                </AlignColumn>
                                <AlignIcon>
                                    <EditIcon onClick={() => setOpenEditAdvert(anuncio)} size="16"/>
                                    <DeleteIcon  size="16"/>
                                </AlignIcon>
                            </AdvertContainer>
                
                        ))
                    }
                </AdvertsScroll>
                {
                openEditAdvert &&
                    <ModalToManageAdvert setModalState={setOpenEditAdvert}/>
                
                }
                <AdvertButton>Anunciar</AdvertButton>
            </AdvertsContainer>
        </Container>
    )
}