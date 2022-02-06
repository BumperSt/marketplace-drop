import Image from "next/image"

import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';
import Switch from "react-switch";

import { Container, CopDescription, CopDiv, CopTitle, DivColumn, Title,AlignRow, ToglleThemeDiv, LogoImage, IconImage } from "./bottomBarStyle"
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
            <Title>Quisque efficitur enim vel gravida sagittis.</Title>
            <LogoImage>
                <Image title="Logo" alt="Logo Seliga no drop" layout="fill" src="/imagens/logo-bottomBar.webp"/>
            </LogoImage>
            
            <DivColumn>
                <IconImage style={{
                    marginRight:'1rem'
                }}>
                    <Image title="Iconei Discord" alt="Redirecionar Discord"  layout="fill"src="/icons/discord.webp"/>
                </IconImage>
                
                <IconImage>

                <Image title="Iconei Instagram" alt="Redirecionar Instagram"  layout="fill" src="/icons/instagram.webp"/>
                </IconImage>

            </DivColumn>


            <CopDiv>
                <CopTitle>Lorem ipsum.</CopTitle>
                <AlignRow>
                    <CopDescription>2022. Ut ac risus sit amet nibh varius fermentum. Curabitur in velit sapien. Aenean eu ligula nisi.</CopDescription>

                    <ToglleThemeDiv>
                            <Switch  onColor='#959595' offColor='#959595' uncheckedIcon={false} checkedIcon={false} height={28} width={100} onChange={(e) => DefTheme(e)} checked={changeTheme} />   
                     
                    </ToglleThemeDiv>

                </AlignRow>
            </CopDiv>
        </Container>
    )
}