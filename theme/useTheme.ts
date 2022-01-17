import { getFromLS, setToLS } from "@/utils/storage";
import { useEffect, useState } from "react"
import themes from '../theme/schema.json';

export const UseTheme = () => {

    const [theme, selectTheme] = useState(null)
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        let localeTheme = getFromLS('themes')
        if(localeTheme){
            selectTheme(themes.data[localeTheme.name])
        }else{
            selectTheme(themes.data.default)
        }
    }, [])

    useEffect(() => {
        if(theme){
            console.log(theme)
            setThemeLoaded(true)
        }
    }, [theme])


    
    const setTheme = (themeName) => {
        setToLS('themes', themes.data[themeName]);
        selectTheme(themes.data[themeName])
    }

    return { theme, themeLoaded, setTheme };



}