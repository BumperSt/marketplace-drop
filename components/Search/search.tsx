import { InputDiv, SearchContainer, SearchContentTitle, SearchIcon, SearchInput } from "./searchStyle"

export const Search = () => {
    return(
        <SearchContainer>
            <SearchContentTitle>Proin ut enim tempus, aliquet tellus non, pulvinar est.</SearchContentTitle>
            <InputDiv>
                <SearchIcon size='40'/>
                <SearchInput placeholder="Lorem ipsum dolor sit amet..."/>
            </InputDiv>
        </SearchContainer>
    )
}