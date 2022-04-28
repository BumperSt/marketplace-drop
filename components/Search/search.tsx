import productsApi from "apiService/productsApi"
import useWindowDimensions from "helpers/screenSize"
import { useEffect, useState } from "react"
import { AdvertCard } from "../AdvertCard/advertCard"
import { HeadBar } from "../HeadBar/headBar"
import { ContainerSearch, InputDiv, SearchContainer, SearchContentTitle, SearchIcon, SearchInput } from "./searchStyle"

interface Props {
    closeSearch : any
}


export const Search = ({closeSearch} : Props) => {

    const { height, width } = useWindowDimensions();
    const [searchValue, setSearchValue] = useState('')
    

    useEffect(() => {
        if(searchValue != ''){
            productsApi.search({name:searchValue}).then((res) => {

            }).catch((err) => {
                console.log(err)
            })
        }
    }, [searchValue])


    if(width < 768){
        return(
            <SearchContainer>
                <HeadBar backFunction={closeSearch}/>
                <InputDiv>
                    <SearchIcon size='16'/>
                    <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </InputDiv>
                {
                    searchValue != '' &&
                <ContainerSearch>
                    {
                        [0,1,2,3,4,5,6,7,8,9].map((key) => (
                            <AdvertCard type="searchAdvert" advert={{}} key={key}/>
                        ))
                    }
                
                </ContainerSearch>
    }
            </SearchContainer>
        )
    }else{
        return(
            <InputDiv>
                <SearchIcon size='16'/>
                <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                {
                    searchValue != '' &&
                    <ContainerSearch>
                    {
                        [0,1,2,3,4,5,6,7,8,9].map((key) => (
                            <AdvertCard type="searchAdvert" advert={{}} key={key}/>
                        ))
                    }
                    
                    </ContainerSearch>
                }
                
            </InputDiv>
        )
    }
    
} 