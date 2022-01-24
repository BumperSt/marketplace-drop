import { HeadBarPanel } from "@/components/HeadBarPanel/headBarPanel"
import { SellerAvalaiton } from "@/components/SellerPage/sellerAvalaiton"
import { CenterDiv, Container, PageTitles, SellerDescription } from "@/components/SellerPage/sellerPageStyled"
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

            </CenterDiv>

        </Container>
    )
}

export default SellerPage