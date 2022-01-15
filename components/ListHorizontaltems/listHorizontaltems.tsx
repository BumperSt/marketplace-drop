import Image from "next/image"
import { ItemBackgroud, ItemCard, ItemsScrollList, ItemTitle, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./listHorizontaltemsStyle"

interface Props {
    ListType:String
}

export const ListHorizontaltems = ({ListType}: Props) => {
    return(
        <ListHorizontaltemsContainer>
            {
                ListType == 'Small' ?
                <ListItemContainer>
                    <ListItemsTitle>Suspendisse potenti.</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard key={item}>
                                <ItemBackgroud>
                                        <Image width="104" height="92" src="/temporary/itens.png"></Image>
                                    </ItemBackgroud>
                                    <ItemTitle>Lorem Ipuso</ItemTitle>
                                </ItemCard>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
                :
                <ListItemContainer>
                    <ListItemsTitle>Vivamus sit amet congue nibh.</ListItemsTitle>
                    <ItemsScrollList style={{                    
                        borderRadius: '1rem'
                    }}>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard key={item}>
                                    <ItemBackgroud>
                                        <Image width="155" height="244" src="/temporary/itensLarge.png"></Image>
                                    </ItemBackgroud>
                                </ItemCard>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>

            }
          
        </ListHorizontaltemsContainer>
    )   
}