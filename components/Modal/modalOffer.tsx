import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, DescreptionText, DescreptionTitle, ImageDiv, ListImage, ProductDescreptionDiv, ProductImagensDiv, ProductPrice, ProductSize, ProductSubTitle, ProductTitle, ShareIcon, SmallImageDiv } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"
import { CommentsDiv, CommentsTitle } from "../ProductPage/productPageStyle"


interface Props {
    setModalState:any
}


export const ModalOffer = ({setModalState}: Props) => {


    
    return(
        <Modal setModalState={setModalState}>
            <ProductImagensDiv>
                    <ImageDiv>
                        <Image width="200" height="180" src="/temporary/productImage.png"/>
                    </ImageDiv>
                    <ListImage>
                        <SmallImageDiv>                        
                            <Image width="50" height="40" src="/temporary/productImage.png"/>
                        </SmallImageDiv>
                        <SmallImageDiv>                        
                            <Image width="50" height="48" src="/temporary/productImage.png"/>
                        </SmallImageDiv>                        <SmallImageDiv>                        
                            <Image width="50" height="48" src="/temporary/productImage.png"/>
                        </SmallImageDiv>
                    </ListImage>
            </ProductImagensDiv>
            <AlignColumn>
                <AvaliationStarts avaliationValue={4.7}/>
                <AlignRow>
                    <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                    <ShareIcon/>
                </AlignRow>
                <ProductSubTitle>Aliquam at rhoncus diam</ProductSubTitle>
                <AlignRow>
                    <ProductSize>38</ProductSize>
                    <ProductSize>40</ProductSize>
                    <ProductSize>42</ProductSize>
                    <ProductSize>44</ProductSize>
                </AlignRow>
                <ProductPrice>R$ 1299,99</ProductPrice>
                <BuyButton>Comprar</BuyButton>

            </AlignColumn>
            <ProductDescreptionDiv>
                <DescreptionTitle>LOREM IPSUM</DescreptionTitle>
                <DescreptionText>Interdum et malesuada fames ac 
                ante ipsum primis in faucibus. 
                Phasellus vestibulum ligula nec aliquam lacinia. 
                Aliquam in laoreet diam. 
                Donec ligula quam, accumsan a cursus eu, 
                ullamcorper eu lorem.</DescreptionText>
            </ProductDescreptionDiv>
            <CommentsTitle>Comentários</CommentsTitle>

            <CommentsDiv>

            </CommentsDiv>
            
        </Modal>

    )
}