import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { UseTheme } from '@/theme/useTheme';
import SelectTheme from '@/components/SelectTheme/selectTheme';
import { HeadBar } from '@/components/HeadBar/headBar';
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
            <HeadBar/>
            {/* <SelectTheme setSelectedTheme={setSelectedTheme}/> */}
            <Component {...pageProps} />
          </Container>
          


      </ThemeProvider>
  )
  
}

export default MyApp
