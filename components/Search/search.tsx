import { AdvertCard } from "../AdvertCard/advertCard"
import { HeadBar } from "../HeadBar/headBar"
import { ContainerSearch, InputDiv, SearchContainer, SearchContentTitle, SearchIcon, SearchInput } from "./searchStyle"

interface Props {
    closeSearch : any
}


export const Search = ({closeSearch} : Props) => {
    return(
        <SearchContainer>
            <HeadBar backFunction={closeSearch}/>
            <InputDiv>
                <SearchIcon size='16'/>
                <SearchInput placeholder="Lorem ipsum dolor sit amet..."/>
            </InputDiv>
            <ContainerSearch>
                {
                    [0,1,2,3,4,5,6,7,8,9].map((key) => (
                        <AdvertCard type="searchAdvert" advert={{}} key={key}/>
                    ))
                }
                
            </ContainerSearch>
        </SearchContainer>
    )
}