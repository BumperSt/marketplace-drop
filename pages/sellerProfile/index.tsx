import { AvaliationStarts } from "@/components/AvalationStars/avaliationStarts"
import { HeadBarPanel } from "@/components/HeadBarPanel/headBarPanel"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { SellerAvalaiton } from "@/components/SellerPage/sellerAvalaiton"
import { CenterDiv, Container, OpinioDate, OpinionName, OpinionsDiv, OpinionText, OpnionDiv, PageTitles, SeeMoreOpinion, SellerDescription } from "@/components/SellerPage/sellerPageStyled"
import { ViewUser } from "@/components/ViewUser/viewUser"
import { useRouter } from "next/router"
import { useState } from "react"

const SellerPage = () => {

    const router = useRouter()



    return(
        <Container>
            <HeadBarPanel/>
            <CenterDiv>
                <ViewUser style={{
                    boxShadow: 'none',
                    padding: '0',
                    width: '85%',
                }} noIcon={true}/>
                <PageTitles>Sobre o vendedor</PageTitles>
                <SellerDescription>Nam scelerisque metus ac laoreet dignissim. Nullam iaculis metus in iaculis consequat. </SellerDescription>
                <SellerAvalaiton/>
                <PageTitles>Opiniões</PageTitles>
                <OpinionsDiv>
                    <OpnionDiv>
                        <OpinioDate>01/01/2022</OpinioDate>
                        <OpinionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus.<OpinionName>RJOAO6598</OpinionName></OpinionText>
                        <AvaliationStarts size='.5rem' avaliationValue={3}/>
                    </OpnionDiv>
                    <OpnionDiv>
                        <OpinioDate>01/01/2022</OpinioDate>
                        <OpinionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus.<OpinionName>RJOAO6598</OpinionName></OpinionText>
                        <AvaliationStarts size='.5rem' avaliationValue={3}/>

                    </OpnionDiv>
                    <SeeMoreOpinion>Ver mais opiniões</SeeMoreOpinion>
                </OpinionsDiv>


            </CenterDiv>
            <ListHorizontaltems ListType="Small"/>
                <ListHorizontaltems ListType="Small"/>
        </Container>
    )
}

export default SellerPage