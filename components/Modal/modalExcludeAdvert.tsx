import Image from "next/image"
import { AdvertContainer, AdvertProductImage, AdvertProductPrice, AdvertProductTitle, AlignColumn, AlingRow } from "../ActivyAdverts/activyAdvertsStyle"
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
                <AlingRow>
                    <AdvertProductImage>
                        <Image  layout='fill' src="/temporary/itens.png"/>
                    </AdvertProductImage>
                    <AlignColumn>
                        <AdvertProductTitle>{anuncio.title}</AdvertProductTitle>
                        <AdvertProductPrice>R$ {anuncio.price}</AdvertProductPrice>
                    </AlignColumn>
                </AlingRow>

            </AdvertContainer>
            <AlignRowButtons>

                <ModalButton otherColor={true}>Sim, deletar</ModalButton>
                <ModalButton onClick={() => setModalState(false)}>Voltar</ModalButton>

            </AlignRowButtons>
        </Modal>
    )
}