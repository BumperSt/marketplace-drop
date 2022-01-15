import { Container } from "@/components/HomePage/styleHomePage"
import LastComponentInHome from "@/components/LastComponentInHome/lastComponentInHome"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
import { ModalCadastro } from "@/components/Modal/modalCadastro"
import { ModalInfos } from "@/components/Modal/modalInfos"
import { Search } from "@/components/Search/search"

const HomePage = () => {

  return (
    <Container>
        <Search/>
        <ListHorizontaltems ListType="Small"/>
        <ListHorizontaltems ListType="Large"/>
        <LastComponentInHome/>

    </Container>
  )
}

export default HomePage
