import { ActivyAdvertsTitle, AdvertButton, AdvertsScroll, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText } from "./AdvertStyle"
import { useEffect, useState } from "react"
import Image from "next/image"

import { ModalToManageAdvert } from "./modalToManageAdvert"
import { ModalExcludeAdvert } from "./modalExcludeAdvert"
import { HeadBar } from "@/components/HeadBar/headBar"
import { Switch } from "@/components/Inputs/swith"
import { Advert } from "./Advert"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"

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
        <ContainerModel  editOn={openEditAdvert}>       
            <AlingRowSwithAndText>
                <SelectAdvertTypeText>Disponíveis</SelectAdvertTypeText>
                <Switch styleBall={{backgroundColor:'#2A2A2A'}} styleDiv={{border:'solid 1px #2A2A2A'}}  onClick={() => setDisponibles(!disponibles)} checked={disponibles}/>
                <SelectAdvertTypeText>Vendidos</SelectAdvertTypeText>
            </AlingRowSwithAndText>
            
            <InternalContainer pageName={'adverts'}>
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
            </InternalContainer>
        </ContainerModel>
    )
}