import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Input } from "../../Inputs/input"
import { SelectItemCondition } from "../../Inputs/itemCondicion"
import { SelectStyledComponent } from "../../Inputs/selectInput"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignTitleAndContent, AlingCollum, AlingCollumInputs, DivTitle, PhotoDiv ,AlingRowInDesktop, PublisherButton, MarkToSell} from "./mangeAdvertStyle"

import { ActivyAdvertsTitle, AdvertButton, AdvertsScroll, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlignIcon, AdvertContainer,AlingRow, Arrow, SelectAdvertTypeText, AlingRowSwithAndText, ReverseCollumInDesktop, AlingRowDesktop } from "./AdvertStyle"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import productsApi from "apiService/productsApi"
import category from "apiService/category"
import { forEach } from "lodash"

interface Props {
}



export const ModalToManageAdvert = ({}: Props) => {

    const fileInput = useRef(null)

    const [advertName, setAdvertName] = useState("")
    const [categorysName, setCategorysName] = useState(null)
    const [categorySelected, setCategorySelected] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [categorys, setCategorys] = useState(null)
    const [advertDescription, setAdvertDescription] = useState("")
    const [advertPrice, setAdvertPrice] = useState("")
    const [advertPhotos, setAdvertPhotos] = useState([])
    const [itemCondition, setItemCondition] = useState(5.5)
    const [conditionSelected, setConditionSelected] = useState("")
    const [itemSize, setItemSize] = useState('')

    const handleFileInput = (e) => {
        // handle validations
        console.log(e.target.files[0])
        console.log(URL.createObjectURL(e.target.files[0]))
        setAdvertPhotos([...advertPhotos, URL.createObjectURL(e.target.files[0])])
    }

    const createAdvert = () => {
        productsApi.create({
            name: advertName,
            description: advertDescription,
            value: parseFloat(advertPrice),
            size: parseInt(itemSize),
            condition: conditionSelected,
            condition_value: itemCondition,
            category: categorySelected._id,
            hasBox: false,
            inHands: true

        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }


    useEffect(() => {
        category.list().then((res) => {
            setCategorys(res.data)
            let categoryTempArray = []
            res.data.forEach(element => {
                categoryTempArray.push(element.name)
            });
            setCategorysName(categoryTempArray)
        }).catch((err) => {
            console.error(err)
        })

    }, [])

    useEffect(() => {
        if(selectedCategory !== ""){
            categorys.forEach(element => {
                if(element.name === selectedCategory){
                    setCategorySelected(element)
                    return true
                }
            })
        }
    }, [selectedCategory])



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
                        {
                            categorysName &&
                                <SelectStyledComponent fontColor="secondary" options={categorysName} Title="Tipo de produto" value={selectedCategory} setValue={setSelectedCategory}/>
                        }
                        
                        <Input fontColor="secondary" Title="Nome" value={advertName} setValue={setAdvertName}/>
                        <SelectStyledComponent fontColor="secondary" options={['usado', 'novo']} Title="Condição" value={conditionSelected} setValue={setConditionSelected}/>
                        {
                            conditionSelected == 'usado' &&
                                <SelectItemCondition  fontColor="secondary" Title="Qual a condição do item?" value={itemCondition} setValue={changeValue}/>

                        }
                        {
                            categorySelected &&
                            <SelectStyledComponent fontColor="secondary" options={categorySelected.sizeOptions} Title="Tamanho" value={itemSize} setValue={setItemSize}/>
                        }
                        

                    </AlingCollumInputs>

                    <AlingCollum>

                        <AlignTitleAndContent>
                            <DivTitle>Fotos</DivTitle>
                            <AlignPhotos>
                                <PhotoDiv onClick={() => fileInput.current && fileInput.current.click()}>

                                    <AddPhotosIcon size="35"/>
                                    <input style={{
                                        display: 'none',
                                    }} ref={fileInput} type="file" onChange={handleFileInput}/>
                                    <AddPhotosTitle>JPG, PNG</AddPhotosTitle>
                                </PhotoDiv>
                                {
                                    advertPhotos&&
                                    advertPhotos.map((photo, index) => (
                                        <PhotoDiv key={index}>
                                            <Image  src={photo} width="69" height="59"/>
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