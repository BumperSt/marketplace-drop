import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, DescreptionText, DescreptionTitle, ProductDescreptionDiv, ProductPrice, ProductSize, ProductSubTitle, ProductTitle, ToReportDiv, ToReportIcon, ToReportText, AlignCollum, AlignCollumReverseDesktop, AlingRowInDesktop, Container, Tag, AboutSeller, AboutSellerTitle, SeeStore, StoreName, AlingColumeverseDesktop, AlignCollumInDestkop } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"
import ShowAdvertImagens from "../ShowAdvertImagens/showAdvertImagens"
import { useState } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { AlignRowHeaderDiv, BackIcon } from "./modalStyle"
import { AlingReportAndShareIcon, ShareButtonDiv, ShareIcon, ShareText } from "../ProductPage/productPageStyle"
import useWindowDimensions from "helpers/screenSize"


interface Props {
    setModalState:any,
    
}


export const ModalOffer = ({setModalState}: Props) => {
    const { height, width } = useWindowDimensions();


    return(
        <Modal modalStyle={{
            width: "90vw",
            maxHeight:"80vh",
            marginTop:'10%',
            borderRadius: "8px",
        }} modalStyleDesktop={{
            width: "80vw",
            marginTop:'1rem',
            height:"auto",
        }} backModal={setModalState}>
            <AlignRowHeaderDiv>

                <BackIcon onClick={() => setModalState(false) }size="32"/>
                {
                    width < 768 &&
                    <ShareIcon size="32"/>

                }


            </AlignRowHeaderDiv>
            <Container>


                <AlignCollum>
                    <AlignCollumInDestkop>
                        <ShowAdvertImagens/>
                        {
                            width > 768 &&
                            <AlingReportAndShareIcon>
                                <ShareButtonDiv >
                                    <ShareIcon size={24}/>
                                    <ShareText>Compartilhar</ShareText>
                                </ShareButtonDiv>
                                <ShareButtonDiv style={{
                                    marginTop:'.5rem'
                                }} >
                                    <ToReportIcon size={24}/>
                                    <ShareText>Reportar o anuncio</ShareText>
                                </ShareButtonDiv>
                            </AlingReportAndShareIcon>
                        }

                    </AlignCollumInDestkop>
                    <AlingRowInDesktop>
                        <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                        <AlignRow>
                            <Tag>NOVO</Tag>
                            <Tag>BOX</Tag>
                            <Tag>PRONTA ENTREGA</Tag>
                        </AlignRow>
                        <AlingColumeverseDesktop>
                    
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

                </AlingColumeverseDesktop>
               
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
                    </AlingRowInDesktop>
                </AlignCollum>
                
                {
                            width < 768 &&
                    <ToReportDiv>
                        <ToReportIcon/>
                        <ToReportText>Reportar anúncio</ToReportText>
                    </ToReportDiv>
                }
            </Container>
    </Modal>


    )
}