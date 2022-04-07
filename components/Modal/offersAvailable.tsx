import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, DescreptionText, DescreptionTitle, ProductDescreptionDiv, ProductPrice, ProductSize, ProductSubTitle, ShareIcon, ToReportDiv, ToReportIcon, ToReportText, AlignCollum, AlignCollumReverseDesktop, AlingRowInDesktop, Container, Tag, AboutSeller, AboutSellerTitle, SeeStore, StoreName } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"
import ShowAdvertImagens from "../ShowAdvertImagens/showAdvertImagens"
import { useState } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { Arrow } from "../Perfil/Adverts/AdvertStyle"
import { ModalOffer } from "./modalOffer"
import { AlignRowHeaderDiv, BackIcon } from "./modalStyle"
import { OffersContainer, PriceDiv, PriceValue, ProductImage, SizeButton, StyledLine , ProductTitle} from "./offersAvaliableStyle"


interface Props {
    setModalState:any,
    
}


export const OffersAvaliable = ({setModalState}: Props) => {
    const sizes = [46,44,42,40,38,36]
    const [openOfferModal, setOpenOfferModal] = useState(false)


    return(
    <Modal modalStyle={{
        width: "90vw",
        marginTop:'20%',
        height:"auto",
        borderRadius: "15px",
    }} backModal={setModalState}>
        <AlignRowHeaderDiv>
            <div style={{
                display:'flex',
                flexDirection:'row',
                width: '100%',
                alignItems: 'center',
            }}>
                <BackIcon onClick={() => setModalState(false) }size="32"/>

                <ProductTitle>MIKE LAIR 2 RED HOT</ProductTitle>

            </div>
            <SizeButton>46</SizeButton>

        </AlignRowHeaderDiv>
        <Container>
        

            <OffersContainer>
                        {
                            sizes.map((size, index) => (
                                <>
                                    <PriceDiv key={index} onClick={() => setOpenOfferModal(true)}>
                                        <ProductImage>
                                            <Image src="/temporary/itens.png" layout="fill"/>
                                        </ProductImage>
                                        <PriceValue>R$ 999,99</PriceValue>
                                        <Arrow size={20} />
                                    </PriceDiv>
                                    {
                                        index !== (sizes.length-1) && <StyledLine/>
                                    }
                                </>

                            ))
                        }

                    
            </OffersContainer>
            </Container>
            {
                openOfferModal &&
                <ModalOffer setModalState={setOpenOfferModal}/>
            }
    </Modal>


    )
}