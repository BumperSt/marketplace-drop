import { BottomBar } from "@/components/BottomBar/bottomBar"
import { Container } from "@/components/HomePage/styleHomePage"
import LastComponentInHome from "@/components/LastComponentInHome/lastComponentInHome"
import { ListHorizontaltems } from "@/components/ListHorizontaltems/listHorizontaltems"
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
