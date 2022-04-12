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

        <ListHorizontaltems ListType="Small"/>
        <ListHorizontaltems ListType="Large"/>
        <ListHorizontalCategorys/>

        <div style={{
          display:'flex',
          marginTop:'1rem'
        }}>
          <Image width="1249" height="900" src="/temporary/itensLarge.jpg"/>

        </div>
        

    </Container>
    </>
  )
}

export default HomePage
