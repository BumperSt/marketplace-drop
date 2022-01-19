import Image from "next/image"
import { AdvertContainer, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn } from "../ActivyAdverts/activyAdvertsStyle"
import { Modal } from "./modal"
import { AlignRowButtons, ModalButton, ModalSubTitle, ModalTitle } from "./modalStyle"

interface Props {
    setModalState:any,
    anuncio:any
}

export const ModalExcludeAdvert = ({setModalState, anuncio}: Props) => {
    return(
        <Modal setModalState={setModalState}>
            <ModalTitle>Nulla tempus interdum tellus vel placerat?</ModalTitle>
            <ModalSubTitle>Donec facilisis cursus augue, vel convallis dolor volutpat eu.</ModalSubTitle>
            <AdvertContainer key={anuncio.id}>
                <AdvertProductImage>
                    <Image width="50" height="40" src="/temporary/itens.png"/>
                </AdvertProductImage>
                <AlignColumn>
                    <AdvertProductTitle>{anuncio.title}</AdvertProductTitle>
                    <AdvertProductPrice>R$ {anuncio.price}</AdvertProductPrice>
                </AlignColumn>
            </AdvertContainer>
            <AlignRowButtons>
                <ModalButton>Voltar</ModalButton>

                <ModalButton>Deletar</ModalButton>
            </AlignRowButtons>
        </Modal>
    )
}