import { HeadBarHome } from "@/components/HeadBarHome/headBar"
import { Container } from "@/components/HomePage/styleHomePage"
import LastComponentInHome from "@/components/LastComponentInHome/lastComponentInHome"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalInfos } from "@/components/Modal/modalInfos"
import { Search } from "@/components/Search/search"
import { useState } from "react"



const HomePage = () => {

  const [tempStateInfo, setTempStateInfo] = useState(false)

  return (
    <Container>
        <HeadBarHome/>
        <Search/>
        {tempStateInfo &&
          <ModalInfos setModalState={setTempStateInfo}/>
        }
        
        <ListHorizontaltems ListType="Small"/>
        <ListHorizontaltems ListType="Large"/>
        <LastComponentInHome/>
    </Container>
  )
}

export default HomePage
