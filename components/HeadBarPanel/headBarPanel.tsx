import { HeadBarContainer } from "../HeadBarHome/headBarStyle"
import { AlignRow, BackIcon, CenterText, LogoutIcon } from "./headBarPanelStyle"


import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ShareIcon } from "../Modal/modalOfferStyles";

export const HeadBarPanel = () => {

    const [myUrl, setMyUrl] = useState('')
    const router = useRouter()
    const MyUrlName = {
        '/userPanel' : 'Painel de usuário',
        '/editProfile' : 'Editar Perfil',
        '/sellerProfile' : 'Perfil do vendedor'
    }


    useEffect(() => {
        setMyUrl(window.location.pathname)
    }, [])

    return(
        <HeadBarContainer otherBackgroundColor={myUrl === '/sellerProfile'}>
            <AlignRow>
                <BackIcon onClick={() => router.back()} size='1.2rem'/>
                <CenterText>{MyUrlName[myUrl]}</CenterText>
                {
                    myUrl == '/userPanel' &&
                        <LogoutIcon  size='1.2rem'/>

                }
                {
                    myUrl == '/sellerProfile' &&
                        <ShareIcon  size='1.2rem'/>
                }
            </AlignRow>
        </HeadBarContainer>
    )

}