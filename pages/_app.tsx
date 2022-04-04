import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { UseTheme } from '@/theme/useTheme';
import Head from 'next/head';
import { BottomBar } from '@/components/BottomBar/bottomBar';
import UserContext, { IUserContext } from '@/context/userContext';
import auth from 'apiService/auth';
import { IUser } from 'apiService/types/userTypes';
import { LoadingPage } from '@/components/LoadingPage/loadingPage';
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

  const clearAuth = () => {
    setUser(null)
    localStorage.removeItem('@token')
  }

  const logOut = () => {
    clearAuth()

  }

  const [user, setUser] = useState<IUser>(null)
  const userValue: IUserContext = { user, setUser, logOut }
  const [firstLoad, setFirstLoad] = useState(false)
  
  useEffect(() => {
    console.log(firstLoad)
    console.log(user)

  }, [firstLoad])

  useEffect(() => {
     if (!user) {
       auth.get()
         .then(({ data }) => {
           console.log("LOgegeds")
           setUser(data)
         })
         .catch(() => {
           setFirstLoad(true)

         })
         .finally(() => {
         })
     } else {
       setFirstLoad(true)
     }
   }, [])
 
  useEffect(() => {
    if (user) {      
      setFirstLoad(true)
    }
  }, [user])


  if(firstLoad) {
    return (
      <UserContext.Provider value={userValue}>

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
    </UserContext.Provider>

  
)
  }else{
    return(
      <LoadingPage/>
    )
  }


 
  
}

export default MyApp
