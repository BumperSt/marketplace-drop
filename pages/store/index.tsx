import { AdvertCard } from "@/components/AdvertCard/advertCard"
import { AvaliationStarts } from "@/components/AvalationStars/avaliationStarts"
import { HeadBar } from "@/components/HeadBar/headBar"
import withAuth from "@/components/hoc/witch-auth"
import { Input } from "@/components/Inputs/input"
import { Container, FaceIcon, HeadDiv, InstaIcon, PageContent, ProfilePictureImage, CollumDiv, SocialIcons, StoreName, StorePageButton, StoreWallpaper, WppIcon, RowDiv, FilterButton, AdvertsDiv, AvaliationDiv, AvaliationTitle, AvaliationPostButton, AvaliationComments, AvaliationCommentDiv, AvaliationCommentTitle, AvaliationComment, UserNameComment, AlignRow } from "@/components/StorePage/storePageStyles"
import Image from "next/image"
import { useState } from "react"

 const StorePage = () => {

    const [actualPage, setActualPage] = useState("anunciosAtivos")

    const [avaliationDescreption, setAvaliationDescrepetion] = useState("")

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

                        <FilterButton onClick={() => setActualPage("anunciosAtivos")} active={actualPage === "anunciosAtivos"}>4 anúncios ativos</FilterButton>
                        <FilterButton onClick={() => setActualPage("anunciosVendidos")}  active={actualPage === "anunciosVendidos"}>2 vendidos</FilterButton>
                        <FilterButton onClick={() => setActualPage("anunciosAvaliações")} active={actualPage === "anunciosAvaliações"}>4 avaliações</FilterButton>                        
                    </RowDiv>
                    {
                        actualPage == "anunciosAtivos" ?
                        <AdvertsDiv>
                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>
                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>
                        </AdvertsDiv>
                        :actualPage == "anunciosVendidos" ?
                        <AdvertsDiv>
                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>
                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>

                            <AdvertCard style={{margin:'0px', marginTop:'1rem'}}advert={{}} type="vip"/>
                        </AdvertsDiv>
                        :actualPage == "anunciosAvaliações" &&
                        <AvaliationDiv>
                            <AvaliationTitle>Avalie o vendedor</AvaliationTitle>
                            <AvaliationStarts size={28} />
                            <Input placeholder="Escreva um comentário"  fontColor="secondary" value={avaliationDescreption} setValue={setAvaliationDescrepetion} textArea={true} />
                            <AvaliationPostButton>Postar</AvaliationPostButton>
                            <AvaliationComments>
                                <AvaliationCommentDiv>
                                    <AlignRow>
                                        <AvaliationCommentTitle><UserNameComment>SNEAKERFEVER </UserNameComment>em 10/02/2022 ás 8:50</AvaliationCommentTitle>
                                        <AvaliationStarts size={12} seeValue={false} avaliationValue={5} />
                                    </AlignRow>
                                    <AvaliationComment>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue augue a ornare imperdiet.
                                    </AvaliationComment>
                                </AvaliationCommentDiv>
                                <AvaliationCommentDiv>
                                    <AlignRow>
                                        <AvaliationCommentTitle><UserNameComment>SNEAKERFEVER </UserNameComment>em 10/02/2022 ás 8:50</AvaliationCommentTitle>
                                        <AvaliationStarts size={12} seeValue={false} avaliationValue={5} />
                                    </AlignRow>
                                    <AvaliationComment>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue augue a ornare imperdiet.
                                    </AvaliationComment>
                                </AvaliationCommentDiv>
                                <AvaliationCommentDiv>
                                    <AlignRow>
                                        <AvaliationCommentTitle><UserNameComment>SNEAKERFEVER </UserNameComment>em 10/02/2022 ás 8:50</AvaliationCommentTitle>
                                        <AvaliationStarts size={12} seeValue={false} avaliationValue={5} />
                                    </AlignRow>
                                    <AvaliationComment>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue augue a ornare imperdiet.
                                    </AvaliationComment>
                                </AvaliationCommentDiv>
                            </AvaliationComments>
                        </AvaliationDiv>
                    }
                   
                </CollumDiv>

            </PageContent>
            



        </Container>
    )
}

export default StorePage