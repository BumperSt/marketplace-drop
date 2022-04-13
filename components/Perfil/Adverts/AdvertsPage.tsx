import { ActivyAdvertsTitle, AdvertButton, AdvertsContainer, AdvertsScroll, Container, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText } from "./AdvertStyle"
import { useEffect, useState } from "react"
import Image from "next/image"

import { ModalToManageAdvert } from "./modalToManageAdvert"
import { ModalExcludeAdvert } from "./modalExcludeAdvert"
import { HeadBar } from "@/components/HeadBar/headBar"
import { Switch } from "@/components/Inputs/swith"
import { Advert } from "./Advert"

interface props {
    setEditOn:any
}


export const AdvertsPage = ({setEditOn}:props) => {

    const [anuncios, SetAnuncions] = useState(null)
    const [openEditAdvert, setOpenEditAdvert] = useState(false)
    const [openPublisherAdvert, setOpenPublisherAdvert] = useState(false)
    const [disponibles, setDisponibles] = useState(false)
    const [openExcludeAdvert, setOpenExcludeAdvert] = useState(false)

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


    const CloseEdit = () => {
        setOpenEditAdvert(false)
    }

    useEffect(() =>{
        if(openEditAdvert){
            setEditOn(() =>  CloseEdit   )
        }else{
            setEditOn(false )

        }
    }, [openEditAdvert])


    return(
        <Container>       
            <AlingRowSwithAndText>
                <SelectAdvertTypeText>Disponíveis</SelectAdvertTypeText>
                <Switch styleBall={{backgroundColor:'#2A2A2A'}} styleDiv={{border:'solid 1px #2A2A2A'}}  onClick={() => setDisponibles(!disponibles)} checked={disponibles}/>
                <SelectAdvertTypeText>Vendidos</SelectAdvertTypeText>
            </AlingRowSwithAndText>
            
            <AdvertsContainer>
                <AdvertsScroll>
                    {
                        anuncios &&
                        anuncios.map((anuncio) => (
                            <Advert anuncio={anuncio} key={anuncio.id} setOpenEditAdvert={setOpenEditAdvert}/>
                
                        ))
                    }
                </AdvertsScroll>
                <AdvertButton onClick={() => setOpenPublisherAdvert(true)}>Anunciar</AdvertButton>
                {
                    openEditAdvert &&
                        <ModalToManageAdvert  closePage={CloseEdit}/>
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