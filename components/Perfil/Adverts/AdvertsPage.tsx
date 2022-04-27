import { ActivyAdvertsTitle, AdvertButton, AdvertsScroll, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText, ReverseCollumInDesktop, AlingRowDesktop } from "./AdvertStyle"
import { useEffect, useState } from "react"
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
import products from "apiService/products"

interface props {
    setEditOn:any
}


export const AdvertsPage = ({setEditOn}:props) => {

    const [anuncios, SetAnuncions] = useState(null)
    const [openEditAdvert, setOpenEditAdvert] = useState(false)
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
    const [itemSize, setItemSize] = useState('')

    const createAdvert = () => {
        products.create({
            name: advertName,
            description: advertDescription,
            value: parseFloat(advertPrice),
            size: parseInt(itemSize),
            condition: conditionSelected,
            condition_value: itemCondition,
            category: "",
            hasBox: false,
            inHands: true

        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })
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
    
    if(openEditAdvert){
        return(
            <ContainerModel  editOn={openEditAdvert}>       
                <AlingCollumInputs>
                    <AlingRowInDesktop>
                            <AlingCollumInputs>
                                <SelectStyledComponent fontColor="secondary" options={['Nike', 'Adidas']} Title="Tipo de produto" value={advertSubTitle} setValue={setAdvertSubTitle}/>
                                <Input fontColor="secondary" Title="Nome" value={advertName} setValue={setAdvertName}/>
                                <SelectStyledComponent fontColor="secondary" options={['Usado', 'Novo']} Title="Condição" value={conditionSelected} setValue={setConditionSelected}/>
                                {
                                    conditionSelected == 'Usado' &&
                                        <SelectItemCondition  fontColor="secondary" Title="Qual a condição do item?" value={itemCondition} setValue={changeValue}/>

                                }
                                <SelectStyledComponent fontColor="secondary" options={['42', '44']} Title="Tamanho" value={itemSize} setValue={setItemSize}/>

                            </AlingCollumInputs>

                            <AlingCollum>

                                <AlignTitleAndContent>
                                    <DivTitle>Fotos</DivTitle>
                                    <AlignPhotos>
                                        <PhotoDiv>
                                            <AddPhotosIcon size="35"/>
                                            <AddPhotosTitle>JPG, PNG</AddPhotosTitle>
                                        </PhotoDiv>
                                        {
                                            advertPhotos&&
                                            advertPhotos.map((photo) => (
                                                <PhotoDiv key={photo.key}>
                                                    <Image  src={photo.url} width="69" height="59"/>
                                                </PhotoDiv>
                                            ))
                                        }
                                
                                    </AlignPhotos>
                                </AlignTitleAndContent>
                                <ReverseCollumInDesktop>
                                    <Input fontColor="secondary" Title="Preço (R$)" value={advertPrice} setValue={setAdvertPrice}/>
                                    <Input  fontColor="secondary" Title="Descrição" value={advertDescription} setValue={setAdvertDescription} inputType={'textarea'} />
                                </ReverseCollumInDesktop>

                            
                            
                            </AlingCollum>
                        </AlingRowInDesktop>
                        <AlingRowDesktop>
                                    <PublisherButton>Publicar</PublisherButton>
                                        <MarkToSell>
                                                <input style={{
                                                    cursor: 'pointer',
                                                }} type="checkbox" id="scales" name="scales" />
                                                <div>
                                                    <h1>Marcar como vendido </h1>
                                                    <h1>Isso irá desativar o anúncio.</h1>
                                                </div>
                                        </MarkToSell>
                                </AlingRowDesktop>
                    </AlingCollumInputs>            
            </ContainerModel>

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
                    <AdvertButton onClick={() => setOpenPublisherAdvert(true)}>Anunciar</AdvertButton>

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