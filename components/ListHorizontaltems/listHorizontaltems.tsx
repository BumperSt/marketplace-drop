import Image from "next/image"
import { useRouter } from "next/router"
import { AdvertCard } from "../AdvertCard/advertCard"
import { ItemBackgroud, ItemCard } from "../AdvertCard/advertCardStyle"
import {ItemsScrollList, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./listHorizontaltemsStyle"

interface Props {
    title: string,
    type:'advert' | 'vip' | 'searchAdvert' | 'lastAdverts'
    ListType:'Large' | 'Small'
}

export const ListHorizontaltems = ({ListType, title, type}: Props) => {

    const router = useRouter()

    return(
        <ListHorizontaltemsContainer>
            {
                ListType == 'Small' ?
                <ListItemContainer>
                    <ListItemsTitle>{title}</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5].map((item) => (
                                <AdvertCard type={type} advert={{}} key={item}/>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
                :
                <ListItemContainer>
                    <ListItemsTitle>{title}</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5].map((item) => (
                                <AdvertCard type={type}  advert={{}} key={item}/>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
            }
          
        </ListHorizontaltemsContainer>
    )   
}