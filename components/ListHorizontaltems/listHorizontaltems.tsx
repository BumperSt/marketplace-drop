import Image from "next/image"
import { useRouter } from "next/router"
import { ItemBackgroud, ItemCard, ItemsScrollList, ItemTitle, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./listHorizontaltemsStyle"

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
                    <ListItemsTitle>Suspendisse potenti.</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard key={item} onClick={() => router.push('/productPage')}>
                                <ItemBackgroud>
                                        <Image alt="teste" title="teste" width="268" height="238" src="/temporary/itens.png"></Image>
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
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard Large={true} key={item}>
                                    <ItemBackgroud>
                                        <Image alt="teste" title="teste" width="384" height="607" src="/temporary/itensLarge.png"></Image>
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