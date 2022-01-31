import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { UseTheme } from '@/theme/useTheme';
import SelectTheme from '@/components/SelectTheme/selectTheme';
import Head from 'next/head';
import { BottomBar } from '@/components/BottomBar/bottomBar';
const Container = styled.div`

`;

function MyApp({ Component, pageProps }: AppProps) {
  
  const {theme, themeLoaded} = UseTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    if(themeLoaded) {
      setSelectedTheme(theme);
    }
  }, [themeLoaded]);

   useEffect(() => {
    console.log(theme)
   },[theme])

  return(
    selectedTheme&&
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles/>
        
          <Container>
            <Head>
                <html lang="pt-br"/>
                <title>Se Liga No Drop</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            </Head>

            <Component {...pageProps} />
            <BottomBar  setSelectedTheme={setSelectedTheme}/>

          </Container>
          


      </ThemeProvider>
  )
  
}

export default MyApp
