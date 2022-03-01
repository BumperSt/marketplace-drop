import Image from "next/image"
import { useRouter } from "next/router"
import { AdvertCard } from "../AdvertCard/advertCard"
import { ItemBackgroud, ItemCard } from "../AdvertCard/advertCardStyle"
import {ItemsScrollList, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./listHorizontaltemsStyle"

interface Props {
    ListType:'Large' | 'Small'
}

export const ListHorizontaltems = ({ListType}: Props) => {

    const router = useRouter()

    return(
        <ListHorizontaltemsContainer>
            {
                ListType == 'Small' ?
                <ListItemContainer>
                    <ListItemsTitle>Últimos drops</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <AdvertCard type="advert" advert={{}} key={item}/>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
                :
                <ListItemContainer>
                    <ListItemsTitle>Anúncios VIP</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <AdvertCard type="vip" advert={{}} key={item}/>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
            }
          
        </ListHorizontaltemsContainer>
    )   
}