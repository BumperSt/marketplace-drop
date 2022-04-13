import { HeadBar } from "@/components/HeadBar/headBar"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalOffer } from "@/components/Modal/modalOffer"
import { OffersAvaliable } from "@/components/Modal/offersAvailable"
import { Arrow } from "@/components/Perfil/Adverts/AdvertStyle"
import { AlignColumn, AlignDescreptionColumn, AlignIcons, AlignPrices, AlingCollumDesktop, AlingRowDesktop, AlingRowDesktopDescreption, BackIcon, Container, ContainerProductPage, DescreptionText, DescreptionTitle, PriceDiv, PriceValue, ProductDescreptionDiv, ProductImage, ProductPriceContainer, ProductTitle, ShareIcon, SizeButton, StyledLine } from "@/components/ProductPage/productPageStyle"
import useWindowDimensions from "helpers/screenSize"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const ProductPage = () => {

    const router = useRouter()
    const [openOfferModal, setOpenOfferModal] = useState(false)
    const sizes = [46,44,42,40,38,36]
    const { height, width } = useWindowDimensions();

    return(
        <Container>
            <HeadBar/>
            <ContainerProductPage>
            {
                width < 768 &&
                <>
                    <AlignIcons>
                        <BackIcon onClick={() => router.back()} size={30}/>
                        <ShareIcon size={26}/>
                    </AlignIcons>
                        
                    <ProductImage>
                        <Image src="/temporary/itens.png" layout="fill"/>
                    </ProductImage>
                </>
                }
                
                <AlingRowDesktop>
                    
                    <AlingCollumDesktop  margin={true}>
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
                        {
                            width > 768 &&
                            <ProductImage>
                                <Image src="/temporary/itens.png" layout="fill"/>
                            </ProductImage>
                        }
                        <ProductDescreptionDiv>
                            <AlignPrices>
                                    <AlingRowDesktopDescreption>
                                        <AlignColumn>
                                            <DescreptionTitle>RETAIL</DescreptionTitle>
                                            <DescreptionText>R$ 1599,99</DescreptionText>
                                        </AlignColumn>
                                        <AlignColumn>
                                            <DescreptionTitle>Maximo</DescreptionTitle>
                                            <DescreptionText>R$ 1599,99</DescreptionText>
                                        </AlignColumn>
                                    </AlingRowDesktopDescreption>
                                    <AlignColumn  style={{textAlign: 'center'}}>
                                        <DescreptionTitle>LANÇAMENTO</DescreptionTitle>
                                        <DescreptionText>31/12/21</DescreptionText>
                                    </AlignColumn>
                                    <AlingRowDesktopDescreption>
                                        <AlignColumn  style={{textAlign: 'end'}}>
                                            <DescreptionTitle>STYLE</DescreptionTitle>
                                            <DescreptionText>532D23-012</DescreptionText>
                                        </AlignColumn>
                                        <AlignColumn style={{textAlign: 'end'}}>
                                            <DescreptionTitle>Minimo</DescreptionTitle>
                                            <DescreptionText>R$ 499,99</DescreptionText>
                                        </AlignColumn>
                                    </AlingRowDesktopDescreption>
                            </AlignPrices>                              
                            <AlignDescreptionColumn>
                                <DescreptionTitle>DESCRIÇÃO</DescreptionTitle>
                                <DescreptionText style={{
                                    marginLeft:'0rem',
                                }}>In non libero ut elit congue accumsan. Vestibulum nec metus sodales, mattis nisl eu, gravida nisl.</DescreptionText>
                            </AlignDescreptionColumn>
                        </ProductDescreptionDiv>
                    </AlingCollumDesktop>
                </AlingRowDesktop>

            </ContainerProductPage>
            <ListHorizontaltems title="Anúncios patrocinados" ListType="Large"/>

            {
                openOfferModal &&
                <OffersAvaliable setModalState={setOpenOfferModal}/>
            }
        </Container>
    )
}

export default ProductPage