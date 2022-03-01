import Image from "next/image"
import { useRouter } from "next/router"
import { AlignVipSize, AlingRowVipSizeAndPrice, ItemBackgroud, ItemCard, ItemsScrollList, ItemTitle, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle, VipItemDiv, VipItemPrice, VipItemTitle, VipSize } from "./lastAdvertsHorizontalListStyle"


export const LastAdvertsHorizontalList = () => {

    const router = useRouter()

    return(
        <ListHorizontaltemsContainer>
                <ListItemContainer>
                    <ListItemsTitle>Últimos anúncios</ListItemsTitle>
                    <ItemsScrollList>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <ItemCard  key={item}>
                                    <ItemBackgroud Large={true}>
                                        <Image layout="fill" objectFit="cover" alt="teste" title="teste" src="/home/image34.png"></Image>
                                    </ItemBackgroud>
                                    <VipItemDiv>
                                        <VipItemTitle>CONSECTETUR ADIPISCING ELIT</VipItemTitle>
                                        <AlingRowVipSizeAndPrice>
                                            <VipItemPrice>R$ 1299,99</VipItemPrice>    
                                            <AlignVipSize>
                                                <VipSize>42</VipSize>
                                                <VipSize>44</VipSize>
                                            </AlignVipSize>
                                            
                                        </AlingRowVipSizeAndPrice>
                                    </VipItemDiv>
                                   
                                    
                                </ItemCard>
                            ))
                        }
                    </ItemsScrollList>
                </ListItemContainer>
        </ListHorizontaltemsContainer>
    )   
}