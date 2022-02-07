import { min } from "lodash"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Input } from "../Inputs/input"
import { AddPhotosIcon, AddPhotosTitle, AlignPhotos, AlignRowSizes, AlignTitleAndContent, AlingCollum, AlingCollumInputs, DivTitle, PhotoDiv, SizeButton ,AlingRowInDesktop} from "./mangeAdvertStyle"
import { Modal } from "./modal"
import { ModalButton, ModalTitle } from "./modalStyle"


interface Props {
    setModalState:any,
    modalType?:'create',
}



export const ModalToManageAdvert = ({setModalState, modalType}: Props) => {

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
        <Modal setModalState={setModalState}>
            <ModalTitle>{modalType == 'create' ? 'Criar Anuncio' : 'Gerenciar Anuncio'}</ModalTitle>
            <AlingCollumInputs>

            <AlingRowInDesktop>
                    <AlingCollumInputs>
                        <Input Style={{
                            width:'100%'
                        }} Title="Nome" value={advertName} setValue={setAdvertName}/>
                        <Input Style={{
                            width:'100%'
                        }} Title="Subtitulo" value={advertSubTitle} setValue={setAdvertSubTitle}/>
                        <Input Style={{
                            width:'100%'
                        }} Title="Descrição" value={advertDescription} setValue={setAdvertDescription} StyleInput={{minHeight:'4.5rem'}}/>
                    </AlingCollumInputs>

                    <AlingCollum>
                        <AlignTitleAndContent>

                        <DivTitle>Tamanhos</DivTitle>
                        <AlignRowSizes>
                            {
                                advertSizes&&
                                advertSizes.map((size) => (
                                    <SizeButton active={sizeButtonPressed.includes(size)} onClick={() => sizeButtonPressed.includes(size)  ?  setSizeButtonPressed(sizeButtonPressed.filter(item => item !== size)    ) : setSizeButtonPressed([...sizeButtonPressed, size])} key={size}>{size}</SizeButton>

                                ))
                            }
                        </AlignRowSizes>
                        </AlignTitleAndContent>

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
                        

                    </AlingCollum>
                </AlingRowInDesktop>
                <Input Style={{
                        alignSelf: 'center'
                }} Title="Preço (R$)" value={advertPrice} setValue={setAdvertPrice}/>
                <ModalButton>Anunciar</ModalButton>
                </AlingCollumInputs>

        </Modal>
    )
}