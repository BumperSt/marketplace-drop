import { HeadBarContainer } from "../HeadBarHome/headBarStyle"
import { AlignRow, BackIcon, CenterText, LogoutIcon } from "./headBarPanelStyle"


import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const HeadBarPanel = () => {

    const [myUrl, setMyUrl] = useState('')
    const router = useRouter()
    const MyUrlName = {
        '/userPanel' : 'Painel de usuário',
        '/editProfile' : 'Editar Perfil'
    }


    useEffect(() => {
        setMyUrl(window.location.pathname)
    }, [])

    return(
        <HeadBarContainer>
            <AlignRow>
                <BackIcon onClick={() => router.back()} size='30'/>
                <CenterText>{MyUrlName[myUrl]}</CenterText>
                {
                    myUrl == '/userPanel' &&
                        <LogoutIcon size='26'/>

                }
            </AlignRow>
        </HeadBarContainer>
    )

}