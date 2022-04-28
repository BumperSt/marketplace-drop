import Image from "next/image"
import { useEffect, useState } from "react"
import { Input } from "../../Inputs/input"
import { SelectItemCondition } from "../../Inputs/itemCondicion"
import { SelectStyledComponent } from "../../Inputs/selectInput"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignTitleAndContent, AlingCollum, AlingCollumInputs, DivTitle, PhotoDiv ,AlingRowInDesktop, PublisherButton, MarkToSell} from "./mangeAdvertStyle"

import { ActivyAdvertsTitle, AdvertButton, AdvertsScroll, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText, ReverseCollumInDesktop, AlingRowDesktop } from "./AdvertStyle"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import productsApi from "apiService/productsApi"

interface Props {
}



export const ModalToManageAdvert = ({}: Props) => {

    const [advertName, setAdvertName] = useState("")
    const [advertSubTitle, setAdvertSubTitle] = useState("")
    const [advertDescription, setAdvertDescription] = useState("")
    const [advertPrice, setAdvertPrice] = useState("")
    const [advertPhotos, setAdvertPhotos] = useState(null)
    const [itemCondition, setItemCondition] = useState(5.5)
    const [conditionSelected, setConditionSelected] = useState("")
    const [itemSize, setItemSize] = useState('')



    const createAdvert = () => {
        productsApi.create({
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
        let tempArray = []
        let photoArray = []
        for (let index = 32; index <= 46;) {
            tempArray.push(index)
            photoArray.push({'url' : '/temporary/advertPhoto.png', 'key':index-20})
            index += 2

        }
        setAdvertPhotos(photoArray)
    }, [])

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



    return(
        <ContainerModel style={{
            flexDirection: 'row',
        }}>       
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
                            <PublisherButton onClick={() => createAdvert()}>Publicar</PublisherButton>
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
}