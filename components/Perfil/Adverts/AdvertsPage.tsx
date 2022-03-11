import { ActivyAdvertsTitle, AdvertButton, AdvertsContainer, AdvertsScroll, Container, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText } from "./AdvertStyle"
import { useEffect, useState } from "react"
import Image from "next/image"

import { ModalToManageAdvert } from "./modalToManageAdvert"
import { ModalExcludeAdvert } from "./modalExcludeAdvert"
import { HeadBar } from "@/components/HeadBar/headBar"
import { Switch } from "@/components/Inputs/swith"

interface props {
    closePage:any
}


export const AdvertsPage = ({closePage}:props) => {

    const [anuncios, SetAnuncions] = useState(null)
    const [openEditAdvert, setOpenEditAdvert] = useState(false)
    const [openPublisherAdvert, setOpenPublisherAdvert] = useState(false)
    const [disponibles, setDisponibles] = useState(false)
    const [openExcludeAdvert, setOpenExcludeAdvert] = useState(false)

    const cu = () => {
        setDisponibles(!disponibles)
    }

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
            <HeadBar backFunction={closePage}/>
            <AlingRow>
                <SelectAdvertTypeText>Disponíveis</SelectAdvertTypeText>
                <Switch styleBall={{backgroundColor:'#2A2A2A'}} styleDiv={{border:'solid 1px #2A2A2A'}}  onClick={cu} checked={disponibles}/>
                <SelectAdvertTypeText>Vendidos</SelectAdvertTypeText>
            </AlingRow>
            
            <AdvertsContainer>
                <AdvertsScroll>
                    {
                        anuncios &&
                        anuncios.map((anuncio) => (
                            <AdvertContainer key={anuncio.id} onClick={() => setOpenEditAdvert(true)}>
                                <AlingRow>
                                    <AdvertProductImage>
                                        <Image layout="fill" objectFit="cover" src="/temporary/itens.png"/>
                                    </AdvertProductImage>
                                    <AlignColumn>
                                        <AdvertProductTitle>{anuncio.title}</AdvertProductTitle>
                                        <AdvertProductPrice>R$ {anuncio.price}</AdvertProductPrice>
                                    </AlignColumn>
                                    <Arrow size={20}/>
                                </AlingRow>
                                <AlignIcon>
                                </AlignIcon>
                            </AdvertContainer>
                
                        ))
                    }
                </AdvertsScroll>
                <AdvertButton onClick={() => setOpenPublisherAdvert(true)}>Anunciar</AdvertButton>
                {
                    openEditAdvert &&
                        <ModalToManageAdvert closePage={() => setOpenEditAdvert(false)}/>
                }
                {/* {
                openEditAdvert &&
                    <ModalToManageAdvert setModalState={setOpenEditAdvert}/>
                }
                {
                    openExcludeAdvert && 
                    <ModalExcludeAdvert anuncio={openExcludeAdvert} setModalState={setOpenExcludeAdvert}/>
                }
                {
                    openPublisherAdvert && 
                    <ModalToManageAdvert modalType={'create'} setModalState={setOpenPublisherAdvert}/>
                } */}
            </AdvertsContainer>
        </Container>
    )
}