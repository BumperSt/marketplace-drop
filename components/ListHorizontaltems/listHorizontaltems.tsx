import Image from "next/image"
import { useRouter } from "next/router"
import { AlignVipSize, AlingRowVipSizeAndPrice, ItemBackgroud, ItemCard, ItemsScrollList, ItemTitle, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle, VipItemDiv, VipItemPrice, VipItemTitle, VipSize } from "./listHorizontaltemsStyle"

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
                    <ListItemsTitle>Anúncios VIP</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard  key={item}>
                                    <ItemBackgroud Large={true}>
                                        <Image layout="fill" objectFit="cover" alt="teste" title="teste" src="/home/vip.png"></Image>
                                    </ItemBackgroud>
                                    <VipItemDiv>
                                        <VipItemTitle>CONSECTETUR ADIPISCING ELIT</VipItemTitle>
                                        <AlingRowVipSizeAndPrice>
                                            <VipItemPrice>R$ 1299,99</VipItemPrice>    
                                            <AlignVipSize>
                                                <VipSize>12</VipSize>
                                                <VipSize>12</VipSize>
                                            </AlignVipSize>
                                            
                                        </AlingRowVipSizeAndPrice>
                                    </VipItemDiv>
                                   
                                    
                                </ItemCard>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
            }
          
        </ListHorizontaltemsContainer>
    )   
}