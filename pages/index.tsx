import { HeadBar } from "@/components/HeadBar/headBar"
import { Container } from "@/components/HomePage/styleHomePage"
import HomeCarrousel from "@/components/ImageCarrousel/homeCarrousel"
import { LastAdvertsHorizontalList } from "@/components/LastAdvertsHorizontalList/LastAdvertsHorizontalList"
import { ListHorizontalCategorys } from "@/components/ListHorizontalCategorys/ListHorizontalCategorys"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import Image from "next/image"
import { useState } from "react"



const HomePage = () => {

  const [tempStateInfo, setTempStateInfo] = useState(true)

  const closePerfil = () => {
    setTempStateInfo(false)
  }

  return (
    <Container>
        <HeadBar />
        <HomeCarrousel/>

        <ListHorizontaltems ListType="Small"/>
        <ListHorizontaltems ListType="Large"/>
        <ListHorizontalCategorys/>
        <LastAdvertsHorizontalList/>

        <div style={{
          display:'flex',
          marginTop:'1rem'
        }}>
          <Image width="1249" height="900" src="/temporary/itensLarge.jpg"/>

        </div>
        
        <LastAdvertsHorizontalList/>

    </Container>
  )
}

export default HomePage
