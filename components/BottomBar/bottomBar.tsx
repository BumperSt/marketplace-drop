import Image from "next/image"

import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';

import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title,AlignRow, LogoImage, IconImage, MoreInfoButton, AlingRowToggleTheme, MoonIcon, SunIcon } from "./bottomBarStyle"
import { useEffect, useState } from "react";
import { Switch } from "../Inputs/swith";


interface props{
    setSelectedTheme:any
}

export const BottomBar = ({setSelectedTheme} : props) => {
    

    const {theme, themeLoaded, setTheme} = UseTheme();

    const [controlTheme, setControlTheme] = useState(false)

    const [innerWidth, setInnerWidth] = useState(null)
    const [innerHeight, setInnerHeight] = useState(null)


    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        })
    }, [])


    const DefTheme = (event) => {

        let name = 'dark'
        if(theme.name == 'dark'){
            name = 'default'
            setControlTheme(false)
        }else{
            setControlTheme(true)
        }
        setTheme(name)
        setSelectedTheme(themes.data[name])
    }

    useEffect(() => {
        if(themeLoaded){
            if(theme.name == 'dark'){
                setControlTheme(true)
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
                        <SunIcon size="15" color="white"/>
                        <Switch onClick={DefTheme} checked={controlTheme}/>

                        <MoonIcon size="15" color="white"/>
                    </AlingRowToggleTheme>  
                    }
                          



                </AlignRow>
            </CopDiv>
        </Container>
    )
}