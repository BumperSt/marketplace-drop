import { HeadBarHome } from "@/components/HeadBarHome/headBar"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalOffer } from "@/components/Modal/modalOffer"
import { AlignColumn, AlignIcons, AlignPrices, AlingCollumDesktop, AlingRowDesktop, BackIcon, Container, ContainerProductPage, DescreptionText, DescreptionTitle, PlusIcon, PriceDiv, PriceValue, ProductDescreptionDiv, ProductImage, ProductPriceContainer, ProductTitle, ShareIcon, SizeButton } from "@/components/ProductPage/productPageStyle"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const ProductPage = () => {

    const router = useRouter()
    const [openOfferModal, setOpenOfferModal] = useState(false)


    return(
        <Container>
            <HeadBarHome/>
            <ContainerProductPage>
                <AlignIcons>
                    <BackIcon onClick={() => router.back()} size='1rem'/>
                    <ShareIcon size='.8rem'/>
                </AlignIcons>
                <AlingRowDesktop>
                    <AlingCollumDesktop>
                        <ProductImage>
                            <Image src="/temporary/itens.png" layout='fill' />
                        </ProductImage>
                    
                    </AlingCollumDesktop>
                    <AlingCollumDesktop>
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
                                <PlusIcon size=".5rem"/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem"/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem"/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem"/>
                            </PriceDiv>
                            <PriceDiv>
                                <SizeButton>46</SizeButton>
                                <PriceValue>R$ 999,99</PriceValue>
                                <PlusIcon size=".5rem"/>
                            </PriceDiv>
                        </ProductPriceContainer>
                        <ProductDescreptionDiv>
                            <AlignPrices>
                                <AlignColumn>
                                    <DescreptionTitle>Min</DescreptionTitle>
                                    <DescreptionTitle>R$ 499,99</DescreptionTitle>
                                </AlignColumn>
                                <AlignColumn style={{
                                        textAlign: 'end'
                                }}>
                                    <DescreptionTitle>Max</DescreptionTitle>
                                    <DescreptionTitle>R$ 1599,99</DescreptionTitle>
                                </AlignColumn>
                            </AlignPrices>
                            <AlignColumn>
                                <DescreptionTitle>LANÇAMENTO</DescreptionTitle>
                                <DescreptionTitle>31/12/21</DescreptionTitle>
                            </AlignColumn>
                            <AlignColumn>
                                <DescreptionTitle>LOREM IPSUM</DescreptionTitle>
                                <DescreptionText>In non libero ut elit congue accumsan. Vestibulum nec metus sodales, mattis nisl eu, gravida nisl.Donec et lacus ac est blandit pulvinar sit amet commodo odio.</DescreptionText>
                            </AlignColumn>
                        </ProductDescreptionDiv>
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