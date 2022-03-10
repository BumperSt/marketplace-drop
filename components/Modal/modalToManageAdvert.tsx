import { min } from "lodash"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { Input } from "../Inputs/input"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignTitleAndContent, AlingCollum, AlingCollumInputs, DivTitle, PhotoDiv ,AlingRowInDesktop, PublisherButton} from "./mangeAdvertStyle"
import { Modal } from "./modal"


interface Props {
    closePage:any,
    modalType?:'create',
}



export const ModalToManageAdvert = ({closePage, modalType}: Props) => {

    const [advertName, setAdvertName] = useState("")
    const [advertSubTitle, setAdvertSubTitle] = useState("")
    const [advertDescription, setAdvertDescription] = useState("")
    const [advertPrice, setAdvertPrice] = useState("")
    const [advertSizes, setAdvertSizes] = useState(null)
    const [advertPhotos, setAdvertPhotos] = useState(null)
    const [sizeButtonPressed, setSizeButtonPressed] = useState([])


    useEffect(() => {
        let tempArray = []
        let photoArray = []
        for (let index = 32; index <= 46;) {
            tempArray.push(index)
            photoArray.push({'url' : '/temporary/advertPhoto.png', 'key':index-20})
            index += 2

        }
        setAdvertSizes(tempArray)
        setAdvertPhotos(photoArray)
    }, [])

    useEffect(() => {
        console.log(sizeButtonPressed)
    }, [sizeButtonPressed])

    return(
        <Modal backModal={closePage}>
            <HeadBar backFunction={closePage}/>

            <AlingCollumInputs>

            <AlingRowInDesktop>
                    <AlingCollumInputs>
                        <Input Style={{
                            width:'100%'
                        }} Title="Nome" value={advertName} setValue={setAdvertName}/>
                        <Input Style={{
                            width:'100%'
                        }} Title="Subtitulo" value={advertSubTitle} setValue={setAdvertSubTitle}/>
                       
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
                        <Input Style={{
                            alignSelf: 'center'
                             }} Title="Preço (R$)" value={advertPrice} setValue={setAdvertPrice}/>
                        <Input Style={{
                            width:'100%'
                        }} Title="Descrição" value={advertDescription} setValue={setAdvertDescription} StyleInput={{minHeight:'4.5rem'}}/>
                        <PublisherButton>Publicar</PublisherButton>
                    </AlingCollum>
                </AlingRowInDesktop>

            </AlingCollumInputs>

        </Modal>
    )
}