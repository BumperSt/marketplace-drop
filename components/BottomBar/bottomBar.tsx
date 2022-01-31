import Image from "next/image"

import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';
import Switch from "react-switch";

import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title,AlignRow, ToglleThemeDiv } from "./bottomBarStyle"
import { useEffect, useState } from "react";


interface props{
    setSelectedTheme:any
}

export const BottomBar = ({setSelectedTheme} : props) => {
    
    const [changeTheme, setChangeTheme] = useState(false)


    const {theme, themeLoaded, setTheme} = UseTheme();

    const DefTheme = (event) => {
        setChangeTheme(event)
        let name = 'default'
        if(event){
            name = 'dark'
        }
        setTheme(name)
        setSelectedTheme(themes.data[name])
    }

    useEffect(() => {
        if(themeLoaded){
            if(theme.name == 'dark'){
                setChangeTheme(true)
            }
        }
        
    }, [themeLoaded])



    return(
        <Container>
            <Title>Quisque efficitur enim vel gravida sagittis.</Title>
            <Image title="Logo" alt="Logo Seliga no drop" width="408" height="145" src="/imagens/logo-bottomBar.webp"></Image>
            <DivColumn>
                <Image title="Iconei Discord" alt="Redirecionar Discord" width="82" height="82" src="/icons/discord.webp"></Image>

                <Image title="Iconei Instagram" alt="Redirecionar Instagram" width="82" height="82" src="/icons/instagram.webp"></Image>
            </DivColumn>


            <CopDiv>
                <CopTitle>Lorem ipsum.</CopTitle>
                <AlignRow>
                    <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>
                    <ToglleThemeDiv>
                        <Switch onColor='#959595' offColor='#959595' uncheckedIcon={false} checkedIcon={false} height={62} width={120} onChange={(e) => DefTheme(e)} checked={changeTheme} />  
                    </ToglleThemeDiv>
                </AlignRow>
            </CopDiv>
        </Container>
    )
}