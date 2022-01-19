import { HeadBarHome } from "@/components/HeadBarHome/headBar"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { AlignColumn, AlignIcons, AlignPrices, BackIcon, Container, ContainerProductPage, DescreptionText, DescreptionTitle, PlusIcon, PriceDiv, PriceValue, ProductDescreptionDiv, ProductImage, ProductPriceContainer, ProductTitle, ShareIcon, SizeButton } from "@/components/ProductPage/productPageStyle"
import Image from "next/image"
import { useRouter } from "next/router"

const ProductPage = () => {

    const router = useRouter()

    return(
        <Container>
            <HeadBarHome/>
            <ContainerProductPage>
                <AlignIcons>
                    <BackIcon onClick={() => router.back()}size='35'/>
                    <ShareIcon size='30'/>
                </AlignIcons>
                <ProductImage>
                    <Image src="/temporary/itens.png" width="275" height="184"/>
                </ProductImage>
                <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                <ProductPriceContainer>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
                    </PriceDiv>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
                    </PriceDiv>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
                    </PriceDiv>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
                    </PriceDiv>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
                    </PriceDiv>
                    <PriceDiv>
                        <SizeButton>46</SizeButton>
                        <PriceValue>R$ 999,99</PriceValue>
                        <PlusIcon size="20"/>
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

            </ContainerProductPage>
            <ListHorizontaltems ListType="Small"/>

        </Container>
    )
}

export default ProductPage