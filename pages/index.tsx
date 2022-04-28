import { HeadBar } from "@/components/HeadBar/headBar"
import HomeCarrousel from "@/components/ImageCarrousel/homeCarrousel"
import { ListHorizontalCategorys } from "@/components/ListHorizontalCategorys/ListHorizontalCategorys"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  @media (min-width: 768px){
    padding-inline:1rem;

  }
`

const ImagemBanner = styled.div`
  margin-top: 1rem;
  width:100%;
  position: relative;
  height: 6rem;
`

const HomePage = () => {

  const [tempStateInfo, setTempStateInfo] = useState(true)

  const closePerfil = () => {
    setTempStateInfo(false)
  }

  return (
    <>
    <HeadBar />

    <Container>
        <HomeCarrousel/>

        <ListHorizontaltems type='advert' title='Últimos drops' ListType="Small"/>
        <ListHorizontaltems type="vip" title='Anúncios VIP' ListType="Large"/>
        <ListHorizontalCategorys/>


        <ImagemBanner>
          <Image layout="fill" src="/temporary/banner.png"/>
        </ImagemBanner>
        <ListHorizontaltems type="lastAdverts" title='Últimos Anúncios' ListType="Large"/>
        <ListHorizontaltems type="lastAdverts" title='Últimos Anúncios' ListType="Large"/>

        

    </Container>
    </>
  )
}

export default HomePage
