import { HeadBar } from "@/components/HeadBar/headBar"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalOffer } from "@/components/Modal/modalOffer"
import { OffersAvaliable } from "@/components/Modal/offersAvailable"
import { Arrow } from "@/components/Perfil/Adverts/AdvertStyle"
import { AlignColumn, AlignIcons, AlignPrices, AlignRowInDesktop, AlingCollumDesktop, AlingRowDesktop, BackIcon, Container, ContainerProductPage, DescreptionText, DescreptionTitle, PriceDiv, PriceValue, ProductDescreptionDiv, ProductImage, ProductPriceContainer, ProductTitle, ShareIcon, SizeButton, StyledLine } from "@/components/ProductPage/productPageStyle"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const ProductPage = () => {

    const router = useRouter()
    const [openOfferModal, setOpenOfferModal] = useState(false)
    const sizes = [46,44,42,40,38,36]

    return(
        <Container>
            <HeadBar/>
            <ContainerProductPage>
                <AlignIcons>
                    <BackIcon onClick={() => router.back()} size={30}/>
                    <ShareIcon size={26}/>
                </AlignIcons>
                <AlingRowDesktop>

                    <AlingCollumDesktop  margin={true}>
                        <ProductImage>
                            <Image src="/temporary/itens.png" layout="fill"/>
                        </ProductImage>
                        <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>                       
                        <ProductPriceContainer>
                            {
                                sizes.map((size, index) => (
                                    <>
                                        <PriceDiv key={index} onClick={() => setOpenOfferModal(true)}>
                                            <SizeButton>{size}</SizeButton>
                                            <PriceValue>R$ 999,99</PriceValue>
                                            <Arrow size={20} />
                                        </PriceDiv>
                                        {
                                            index !== (sizes.length-1) && <StyledLine/>
                                        }
                                    </>

                                ))
                            }
    
                       
                        </ProductPriceContainer>

                    </AlingCollumDesktop>
                    <AlingCollumDesktop>
                        <ProductDescreptionDiv>
                            <AlignPrices>
                                    <AlingRowDesktop>
                                        <AlignColumn>
                                            <DescreptionTitle>RETAIL</DescreptionTitle>
                                            <DescreptionText>R$ 1599,99</DescreptionText>
                                        </AlignColumn>
                                        <AlignColumn>
                                            <DescreptionTitle>Maximo</DescreptionTitle>
                                            <DescreptionText>R$ 1599,99</DescreptionText>
                                        </AlignColumn>
                                    </AlingRowDesktop>
                                    <AlignColumn  style={{textAlign: 'center'}}>
                                        <DescreptionTitle>LANÇAMENTO</DescreptionTitle>
                                        <DescreptionText>31/12/21</DescreptionText>
                                    </AlignColumn>
                                    <AlingRowDesktop>
                                        <AlignColumn  style={{textAlign: 'center'}}>
                                            <DescreptionTitle>STYLE</DescreptionTitle>
                                            <DescreptionText>532D23-012</DescreptionText>
                                        </AlignColumn>
                                        <AlignColumn style={{textAlign: 'center'}}>
                                            <DescreptionTitle>Minimo</DescreptionTitle>
                                            <DescreptionText>R$ 499,99</DescreptionText>
                                        </AlignColumn>
                                    </AlingRowDesktop>
                            </AlignPrices>                              
                            <AlignColumn>
                                <DescreptionTitle>DESCRIÇÃO</DescreptionTitle>
                                <DescreptionText>In non libero ut elit congue accumsan. Vestibulum nec metus sodales, mattis nisl eu, gravida nisl.</DescreptionText>
                            </AlignColumn>
                        </ProductDescreptionDiv>
                    </AlingCollumDesktop>
                </AlingRowDesktop>
            </ContainerProductPage>
            {
                openOfferModal &&
                <OffersAvaliable setModalState={setOpenOfferModal}/>
            }
        </Container>
    )
}

export default ProductPage