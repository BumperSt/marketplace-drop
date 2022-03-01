import { HeadBar } from "../HeadBar/headBar"
import { HeadBarPanel } from "../HeadBarPanel/headBarPanel"
import { InputDiv, SearchContainer, SearchContentTitle, SearchIcon, SearchInput } from "./searchStyle"

interface Props {
    closeSearch : any
}


export const Search = ({closeSearch} : Props) => {
    return(
        <SearchContainer>
            <HeadBar backHeaderType={true} backState={closeSearch}/>
            <InputDiv>
                <SearchIcon size='16'/>
                <SearchInput placeholder="Lorem ipsum dolor sit amet..."/>
            </InputDiv>
        </SearchContainer>
    )
}