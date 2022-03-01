import Image from "next/image"

import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';
import Switch from "react-switch";

import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title,AlignRow, ToglleThemeDiv, LogoImage, IconImage, MoreInfoButton, AlingRowToggleTheme, MoonIcon, SunIcon } from "./bottomBarStyle"
import { useEffect, useState } from "react";


interface props{
    setSelectedTheme:any
}

export const BottomBar = ({setSelectedTheme} : props) => {
    
    const [changeTheme, setChangeTheme] = useState(false)


    const {theme, themeLoaded, setTheme} = UseTheme();


    const [innerWidth, setInnerWidth] = useState(null)
    const [innerHeight, setInnerHeight] = useState(null)


    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        })
    }, [])


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
            <LogoImage>
                <Image title="Logo" alt="Logo Seliga no drop" layout="fill" src="/imagens/logo-bottomBar.webp"/>
            </LogoImage>
            
            <MoreInfoButton>Saiba Mais</MoreInfoButton>


            <CopDiv>
                <CopTitle>Lorem ipsum.</CopTitle>
                <AlignRow>
                    <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>
                    {
                        theme&&
                        <AlingRowToggleTheme>
                        <SunIcon color="white"/>
                        <ToglleThemeDiv>
                            <Switch  onColor={theme.colors.bottomBarBackgroud} offColor={theme.colors.bottomBarBackgroud}  uncheckedIcon={false} checkedIcon={false} height={28} width={60} onChange={(e) => DefTheme(e)} checked={changeTheme} />   
                        </ToglleThemeDiv>
                        <MoonIcon color="white"/>
                    </AlingRowToggleTheme>  
                    }
                          



                </AlignRow>
            </CopDiv>
        </Container>
    )
}