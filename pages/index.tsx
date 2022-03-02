import { HeadBar } from "@/components/HeadBar/headBar"
import { Container } from "@/components/HomePage/styleHomePage"
import HomeCarrousel from "@/components/ImageCarrousel/homeCarrousel"
import { LastAdvertsHorizontalList } from "@/components/LastAdvertsHorizontalList/LastAdvertsHorizontalList"
import LastComponentInHome from "@/components/LastComponentInHome/lastComponentInHome"
import { ListHorizontalCategorys } from "@/components/ListHorizontalCategorys/ListHorizontalCategorys"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalInfos } from "@/components/Modal/modalInfos"
import Image from "next/image"
import { useState } from "react"



const HomePage = () => {

  const [tempStateInfo, setTempStateInfo] = useState(true)

  return (
    <Container>
        <HeadBar />
        <HomeCarrousel/>
        
        {/* {tempStateInfo &&
          <ModalInfos setModalState={setTempStateInfo}/>
        } */}
        
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
