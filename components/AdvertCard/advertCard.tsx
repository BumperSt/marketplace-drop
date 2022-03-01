import Image from "next/image"
import { AlignVipSize, AlingRowVipSizeAndPrice, ItemBackgroud, ItemCard, ItemTitle, VipItemDiv, VipItemPrice, VipItemTitle, VipSize } from "./advertCardStyle"
import {useRouter} from 'next/router'

interface Props {
    type: 'advert' | 'vip' | 'searchAdvert'
    advert:any
}

export const AdvertCard = ({advert, type} : Props) => {
    const route = useRouter()

    if(type == 'advert'){
        return(
            <ItemCard onClick={() => route.push('/productPage')}>
                <ItemBackgroud>
                    <Image alt="teste" title="teste" width="268" height="238" src="/temporary/itens.png"></Image>
                </ItemBackgroud>
                <ItemTitle>Lorem Ipuso</ItemTitle>
            </ItemCard>
        )
    }else if(type == 'vip'){
        return(
            <ItemCard>
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
        )
    }else if(type == 'searchAdvert'){
        return(
            <ItemCard style={{
                marginRight:'0px',
                marginTop:'.5rem'
            }}onClick={() => route.push('/productPage')}>
                <ItemBackgroud style={{
                    width: '7rem',
                    height: '6rem'
                }}>
                    <Image alt="teste" title="teste" layout="fill" src="/temporary/itens.png"></Image>
                </ItemBackgroud>
                <ItemTitle style={{
                    fontSize:'14px',
                    transform: 'translateX(-.3rem)',
                    fontWeight:'500',
                }}>Lorem Ipuso</ItemTitle>
            </ItemCard>
        )
    }


    
}