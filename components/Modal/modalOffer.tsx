import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, DescreptionText, DescreptionTitle, ProductDescreptionDiv, ProductPrice, ProductSize, ProductSubTitle, ProductTitle, ShareIcon, ToReportDiv, ToReportIcon, ToReportText, AlignCollum, AlignCollumReverseDesktop, AlingRowInDesktop, Container, Tag, AboutSeller, AboutSellerTitle, SeeStore, StoreName } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"
import ShowAdvertImagens from "../ShowAdvertImagens/showAdvertImagens"
import { useState } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { AlignRowHeaderDiv, BackIcon } from "./modalStyle"


interface Props {
    setModalState:any,
    
}


export const ModalOffer = ({setModalState}: Props) => {


    return(
        <Modal modalStyle={{
            width: "90vw",
            maxHeight:"80vh",
            marginTop:'10%',
            borderRadius: "8px",
        }} backModal={setModalState}>
            <AlignRowHeaderDiv>

                <BackIcon onClick={() => setModalState(false) }size="32"/>
                <ShareIcon size="32"/>


            </AlignRowHeaderDiv>
            <Container>


                <AlingRowInDesktop>
                    <ShowAdvertImagens/>
                    <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                    <AlignRow>
                        <Tag>NOVO</Tag>
                        <Tag>BOX</Tag>
                        <Tag>PRONTA ENTREGA</Tag>
                    </AlignRow>
                </AlingRowInDesktop>
                <ProductDescreptionDiv>
                    <DescreptionTitle>DESCRIÇÃO</DescreptionTitle>
                    <DescreptionText>Interdum et malesuada fames ac 
                    ante ipsum primis in faucibus. 
                    Phasellus vestibulum ligula nec aliquam lacinia. 
                    Aliquam in laoreet diam. 
                    Donec ligula quam, accumsan a cursus eu, 
                    ullamcorper eu lorem.</DescreptionText>
                </ProductDescreptionDiv>
                <AlignRow>
                    <ProductSize>38</ProductSize>
                    <ProductSize>40</ProductSize>
                    <ProductSize>42</ProductSize>
                    <ProductSize>44</ProductSize>
                </AlignRow>
                <ProductPrice>R$ 1299,99</ProductPrice>
                <BuyButton>Enviar mensagem</BuyButton>
                <AboutSeller>
                    <AboutSellerTitle>Sobre o vendedor</AboutSellerTitle>
                    <AlignRow>
                        <AlignColumn style={{
                            padding: '0'
                        }}>
                            <StoreName>Sneaker Store</StoreName>
                            <AvaliationStarts size={15} avaliationValue={4.7} seeValue={true}/>
                        </AlignColumn>
                        
                        <SeeStore>Visitar loja</SeeStore>
                    </AlignRow>
                    
                </AboutSeller>
                <ToReportDiv>
                    <ToReportIcon/>
                    <ToReportText>Reportar anúncio</ToReportText>
                </ToReportDiv>
            </Container>
    </Modal>


    )
}