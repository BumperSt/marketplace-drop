import Image from "next/image";
import { useEffect, useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { AlignRow, BackIcon, HeadBarContainer, LoggedTitle, LoggedTitleColor, LoginButton, LogoImagem, MenuIcon, SearchIcon } from "./headBarStyle";
import {useRouter} from 'next/router'
import { Search } from "../Search/search";

interface props {
    backHeaderType?: boolean,
    backState?: any,
}

export const HeadBar = ({backHeaderType, backState} : props) => {

    const route = useRouter()
    const [stateLoginModal, setStateLoginModal] = useState<Boolean>(false);
    const [logged, setLogged] = useState<Boolean>(false);
    const [openSearch, setOpenSearch] = useState<Boolean>(false);

  useEffect(() => {
    if(logged) {
        setStateLoginModal(false)
    }
  }, [logged])
  console.log(backHeaderType)
  if(backHeaderType){
      return(
        <HeadBarContainer style={{
        }}>
            <BackIcon onClick={() => backState(false) }size="32"/>
            <LogoImagem style={{
            }}>
                <Image onClick={() => route.push('/')} title="Logo" alt="Logo" layout="fill" src="/icons/logo.webp"/>
            </LogoImagem>
        </HeadBarContainer>
      )
  }else{
    return (
        <>
            <HeadBarContainer>
    
                <MenuIcon size='32'/>
    
                <LogoImagem>
                    <Image onClick={() => route.push('/')} title="Logo" alt="Logo" layout="fill" src="/icons/logo.webp"/>
                </LogoImagem>
    
                <SearchIcon onClick={() => setOpenSearch(true)} size='32'/>
                {
                    openSearch &&
                    <Search closeSearch={setOpenSearch}/>
                }
    
                {/* {
                    !logged ? 
                    <LoginButton onClick={() => setStateLoginModal(true)}>Entrar</LoginButton>
                    :
                    <AlignRow onClick={() => route.push('userPanel')}>
                        <LoggedTitle>Olá, <LoggedTitleColor>Jonas</LoggedTitleColor></LoggedTitle>
                        <Image src="/temporary/headIcon.png" width="60" height="60"/>
                    </AlignRow>
    
                } */}
    
            </HeadBarContainer>
            
            {stateLoginModal && 
                <ModalLogin tempSetLoged={setLogged} setModalState={setStateLoginModal} />
            }
        </>
      );
  }
  
};
