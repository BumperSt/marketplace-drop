import { ActivyAdvertsTitle, AdvertButton, AdvertsScroll, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText, ReverseCollumInDesktop, AlingRowDesktop } from "./AdvertStyle"
import { useContext, useEffect, useState } from "react"
import Image from "next/image"

import { ModalExcludeAdvert } from "./modalExcludeAdvert"
import { HeadBar } from "@/components/HeadBar/headBar"
import { Switch } from "@/components/Inputs/swith"
import { Advert } from "./Advert"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignTitleAndContent, AlingCollum, AlingCollumInputs, DivTitle, PhotoDiv ,AlingRowInDesktop, PublisherButton, MarkToSell} from "./mangeAdvertStyle"
import { SelectStyledComponent } from "@/components/Inputs/selectInput"
import { Input } from "@/components/Inputs/input"
import { SelectItemCondition } from "@/components/Inputs/itemCondicion"
import products from "apiService/productsApi"
import productsApi from "apiService/productsApi"
import { ModalToManageAdvert } from "./modalToManageAdvert"

interface props {
    setEditOn:any
}


export const AdvertsPage = ({setEditOn}:props) => {

    const [anuncios, SetAnuncions] = useState(null)
    const [openEditAdvert, setOpenEditAdvert] = useState(false)
    const [createAdvert, setCreateAdvert] = useState(false)

    const [openPublisherAdvert, setOpenPublisherAdvert] = useState(false)
    const [disponibles, setDisponibles] = useState(false)
    const [openExcludeAdvert, setOpenExcludeAdvert] = useState(false)
    const [advertName, setAdvertName] = useState("")
    const [advertSubTitle, setAdvertSubTitle] = useState("")
    const [advertDescription, setAdvertDescription] = useState("")
    const [advertPrice, setAdvertPrice] = useState('')
    const [advertPhotos, setAdvertPhotos] = useState(null)
    const [itemCondition, setItemCondition] = useState(5.5)
    const [conditionSelected, setConditionSelected] = useState("")




    useEffect(() => {
        productsApi.readOwn().then((res) => {
            SetAnuncions(res.data)
        }).catch((err) => {
            console.log(err)
        })
        
    }, [])


    const CloseEditOrCreate = () => {
        setOpenEditAdvert(false)
        setCreateAdvert(false)
    }

    useEffect(() =>{
        if(openEditAdvert || createAdvert){
            setEditOn(() =>  CloseEditOrCreate   )
            
        }else{
            setEditOn(false )

        }
    }, [openEditAdvert, createAdvert])

    const changeValue = (valueToChange) => {
        let valueToSet = itemCondition + valueToChange
        if(valueToChange > 0){
            if(itemCondition < 10){
                setItemCondition(valueToSet)
            }
        }else{
            if(itemCondition > 0){
                setItemCondition(valueToSet)
            }
        }

    }
    
    if(createAdvert || openEditAdvert){
        return(
            <ModalToManageAdvert />
        )
    }else{
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
                    <AdvertButton onClick={() => setCreateAdvert(true)}>Anunciar</AdvertButton>

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
}