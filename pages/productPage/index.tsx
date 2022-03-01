import { HeadBar } from "@/components/HeadBar/headBar"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalOffer } from "@/components/Modal/modalOffer"
import { AlignColumn, AlignIcons, AlignPrices, AlignRowInDesktop, AlingCollumDesktop, AlingRowDesktop, BackIcon, Container, ContainerProductPage, DescreptionText, DescreptionTitle, PlusIcon, PriceDiv, PriceValue, ProductDescreptionDiv, ProductImage, ProductPriceContainer, ProductTitle, ShareIcon, SizeButton } from "@/components/ProductPage/productPageStyle"
import ShowAdvertImagens from "@/components/ShowAdvertImagens/showAdvertImagens"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const ProductPage = () => {

    const router = useRouter()
    const [openOfferModal, setOpenOfferModal] = useState(false)


    return(
        <Container>
            <HeadBar/>
            <ContainerProductPage>
                <AlignIcons>
                    <BackIcon onClick={() => router.back()} size='1rem'/>
                    <ShareIcon size='.8rem'/>
                </AlignIcons>
                <AlingRowDesktop>
                    <AlingCollumDesktop>
                        <ShowAdvertImagens/>
                        <ProductDescreptionDiv>
                            <AlignPrices>
                                <AlignRowInDesktop>
                                    <AlignColumn>
                                        <DescreptionTitle>Minimo</DescreptionTitle>
                                        <DescreptionTitle>R$ 499,99</DescreptionTitle>
                                    </AlignColumn>
                                    <AlignColumn>
                                        <DescreptionTitle>LANÇAMENTO</DescreptionTitle>
                                        <DescreptionTitle>31/12/21</DescreptionTitle>
                                    </AlignColumn>
                                    </AlignRowInDesktop>

                                    <AlignColumn style={{
                                            textAlign: 'end'
                                    }}>
                                        <DescreptionTitle>Maximo</DescreptionTitle>
                                        <DescreptionTitle>R$ 1599,99</DescreptionTitle>
                                    </AlignColumn>
   
                            </AlignPrices>
                              

                            <AlignColumn>
                                <DescreptionTitle>LOREM IPSUM</DescreptionTitle>
                                <DescreptionText>In non libero ut elit congue accumsan. Vestibulum nec metus sodales, mattis nisl eu, gravida nisl.Donec et lacus ac est blandit pulvinar sit amet commodo odio.</DescreptionText>
                            </AlignColumn>
                        </ProductDescreptionDiv>
                    </AlingCollumDesktop>
                    <AlingCollumDesktop  margin={true}>
                        <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>                       
                        <ProductPriceContainer>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem" onClick={() => setOpenOfferModal(true)}/>
                            </PriceDiv>
                        </ProductPriceContainer>

                    </AlingCollumDesktop>
                </AlingRowDesktop>
            </ContainerProductPage>
            <ListHorizontaltems ListType="Small"/>
            {
                openOfferModal &&
                <ModalOffer setModalState={setOpenOfferModal}/>
            }
        </Container>
    )
}

export default ProductPage