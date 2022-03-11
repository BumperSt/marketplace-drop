import { AdvertCard } from "@/components/AdvertCard/advertCard"
import { AvaliationStarts } from "@/components/AvalationStars/avaliationStarts"
import { HeadBar } from "@/components/HeadBar/headBar"
import withAuth from "@/components/hoc/witch-auth"
import { Container, FaceIcon, HeadDiv, InstaIcon, PageContent, ProfilePictureImage, CollumDiv, SocialIcons, StoreName, StorePageButton, StoreWallpaper, WppIcon, RowDiv, FilterButton, AdvertsDiv } from "@/components/StorePage/storePageStyles"
import Image from "next/image"

 const StorePage = () => {
    return(
        <Container>
            <HeadBar/>
            <HeadDiv>
                <StoreWallpaper>
                    <Image src="/home/wallpaper.png" layout="fill"/>
                </StoreWallpaper>
                <CollumDiv style={{
                    paddingInline: '1rem',
                }}>
                    <ProfilePictureImage>
                        <Image src="/home/Profile.png" layout="fill"/>
                    </ProfilePictureImage>
                    <CollumDiv style={{
                        alignSelf: 'flex-end'
                    }}>
                        <SocialIcons>
                            <InstaIcon/>
                            <FaceIcon/>
                            <WppIcon/>
                        </SocialIcons>
                    </CollumDiv>
                </CollumDiv>

            </HeadDiv>
            <PageContent>
                <RowDiv style={{
                        justifyContent: 'space-between'
                    }}>
                    <CollumDiv>
                        <StoreName>Sneaker Store</StoreName>
                        <AvaliationStarts size={12} seeValue={true} avaliationValue={4.7}/>
                    </CollumDiv>
                    <StorePageButton>enviar mensagem</StorePageButton>
                </RowDiv>
                <CollumDiv>
                    <RowDiv style={{
                        justifyContent: 'space-around'
                    }}>

                        <FilterButton active={true}>4 anúncios ativos</FilterButton>
                        <FilterButton>2 vendidos</FilterButton>
                        <FilterButton>4 avaliações</FilterButton>
                        
                    </RowDiv>
                    <AdvertsDiv>
                        <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>
                        <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                        <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                        <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                    </AdvertsDiv>
                </CollumDiv>

            </PageContent>
            



        </Container>
    )
}

export default StorePage