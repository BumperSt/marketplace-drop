import Image from "next/image"
import { useState } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { Modal } from "../Modal/modal"
import { ModalButton } from "../Modal/modalStyle"
import { ModalToManageAdvert } from "../Modal/modalToManageAdvert"
import { AndressPage } from "./Andress/andressPage"

import { AdIcon, AlingProfileAndIcon, Container, ProfileName, ProfilePageButton, StoreIcon, TemporaryCrown, TruckIcon, UserIcon } from "./perfilPageStyle"


interface Props {
    closeModal:any
}

export const PerfilPage = ({closeModal}: Props) => {

    const [openPage, setOpenPage] = useState('')

    const closePage  = () => {
        setOpenPage('')
    }
    
    return(
        <Modal backModal={closeModal}>
            {
                openPage == 'Andress' ?
                    <AndressPage closePage={closePage}/>
                :openPage == 'Adverts'  ?
                    <ModalToManageAdvert closePage={closePage}/>
                :
                    <HeadBar  backFunction={closeModal}/>

            }

            <Container>
                <AlingProfileAndIcon>
                    <ProfileName>Sneaker Store</ProfileName>
                    <TemporaryCrown/>
                </AlingProfileAndIcon>
                <ProfilePageButton>
                    <StoreIcon/>Minha Loja
                </ProfilePageButton>
                <ProfilePageButton onClick={()=> setOpenPage('Adverts')}>
                    <AdIcon/>Meus anúncios
                </ProfilePageButton>
                <ProfilePageButton>
                    <UserIcon/>Dados cadastrais
                </ProfilePageButton>
                <ProfilePageButton onClick={()=> setOpenPage('Andress')}>
                    <TruckIcon/>Endereços
                </ProfilePageButton>

                <ModalButton >Vender agora</ModalButton>
                
            </Container>
        </Modal>
    )
}