import Image from "next/image"

import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';

import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title,AlignRow, LogoImage, IconImage, MoreInfoButton, AlingRowToggleTheme, MoonIcon, SunIcon } from "./bottomBarStyle"
import { useEffect, useState } from "react";
import { Switch } from "../Inputs/swith";
import useWindowDimensions from "helpers/screenSize";
import { useRouter } from "next/router";


interface props{
    setSelectedTheme:any
}

export const BottomBar = ({setSelectedTheme} : props) => {
    
    const route = useRouter()

    const {theme, themeLoaded, setTheme} = UseTheme();

    const [controlTheme, setControlTheme] = useState(false)

    const { height, width } = useWindowDimensions();


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


    if(width < 768){
        return(
            <Container>
                <LogoImage onClick={() => {route.push('/') }}>
                    <Image title="Logo" alt="Logo Seliga no drop" layout="fill" src="/logos/LOGOTIPO WHITE4K (Neag Design).png"/>
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
    }else{
        return(
            <Container>    
                <CopDiv>
                    <AlignRow>
                        <LogoImage>
                            <Image title="Logo" alt="Logo Seliga no drop" layout="fill" src="/logos/logoWhite.png"/>
                        </LogoImage>
                        <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>                              
                    </AlignRow>
                </CopDiv>
                {
                theme&&
                    <AlingRowToggleTheme>
                        <SunIcon size="15" color="white"/>
                        <Switch onClick={DefTheme} checked={controlTheme}/>

                        <MoonIcon size="15" color="white"/>
                    </AlingRowToggleTheme>  
                }
            </Container>
        )
    }
    
}