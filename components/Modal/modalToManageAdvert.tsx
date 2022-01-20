import { min } from "lodash"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Input } from "../Inputs/input"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignRowSizes, DivContainer, DivTitle, PhotoDiv, SizeButton } from "./mangeAdvertStyle"
import { Modal } from "./modal"
import { ModalButton, ModalTitle } from "./modalStyle"


interface Props {
    setModalState:any,
}



export const ModalToManageAdvert = ({setModalState}: Props) => {

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

    return(
        <Modal setModalState={setModalState}>
            <ModalTitle>Gerenciar Anuncio</ModalTitle>
            <Input Title="Nome" value={advertName} setValue={setAdvertName}/>
            <Input Title="Subtitulo" value={advertSubTitle} setValue={setAdvertSubTitle}/>
            <Input Title="Descrição" value={advertDescription} setValue={setAdvertDescription} StyleInput={{
                minHeight:'4.5rem'
            }}/>
            <DivContainer>
                <DivTitle>Tamanhos</DivTitle>
                <AlignRowSizes>
                    {
                        advertSizes&&
                        advertSizes.map((size) => (
                            <SizeButton active={sizeButtonPressed.includes(size)} onClick={() => sizeButtonPressed.includes(size)  ?  setSizeButtonPressed(sizeButtonPressed.filter(item => item !== size)    ) : setSizeButtonPressed([...sizeButtonPressed, size])} key={size}>{size}</SizeButton>

                        ))
                    }
                </AlignRowSizes>
            </DivContainer>
            <DivContainer>
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
            </DivContainer>
            <Input Title="Preço (R$)" value={advertPrice} setValue={setAdvertPrice}/>
            <ModalButton>Publicar</ModalButton>
        </Modal>
    )
}