import Image from "next/image";
import { useEffect, useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { AlignRow, BackIcon, HeadBarContainer, LoggedTitle, LoggedTitleColor, LoginButton, LogoImagem, MenuIcon, SearchIcon } from "./headBarStyle";
import {useRouter} from 'next/router'
import { Search } from "../Search/search";
import { PerfilPage } from "../Perfil/perfilPage";

interface props {
    backFunction?: any,
}

export const HeadBar = ({backFunction} : props) => {

    const route = useRouter()
    const [stateLoginModal, setStateLoginModal] = useState<Boolean>(false);
    const [logged, setLogged] = useState<Boolean>(false);
    const [openSearch, setOpenSearch] = useState<Boolean>(false);
    const [openMenu, setOpenMenu] = useState<Boolean>(false);

    const  closeLoginModal = () => {
        setStateLoginModal(false)
        setLogged(true)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }


  if(backFunction){
      return(
        <HeadBarContainer style={{
            width: '100%',
            paddingLeft:'0px',

            paddingRight:'50%',
        }}>
            <BackIcon onClick={() => backFunction() }size="32"/>
            <LogoImagem style={{
                transform: 'translateX(50%)'
            }}>
                <Image onClick={() => route.push('/')} title="Logo" alt="Logo" layout="fill" src="/logos/LogoHeader.png"/>
            </LogoImagem>
        </HeadBarContainer>
      )
  }else{
    return (
        <>
            <HeadBarContainer>
                {
                    !logged ?
                    <MenuIcon onClick={()=> setStateLoginModal(true)} size='32'/>
                    :
                    <MenuIcon onClick={()=> setOpenMenu(true)} size='32'/>

                

                }
                
                {
                    openMenu&&
                    <PerfilPage closeModal={closeMenu}/>
                }

                <LogoImagem>
                    <Image onClick={() => route.push('/')} title="Logo" alt="Logo" layout="fill" src="/logos/LogoHeader.png"/>
                </LogoImagem>
    
                <SearchIcon onClick={() => setOpenSearch(true)} size='32'/>
                {
                    openSearch &&
                    <Search closeSearch={setOpenSearch}/>
                }
            </HeadBarContainer>
            
            {stateLoginModal && 
                <ModalLogin closeModal={closeLoginModal}/>
            }
        </>
      );
  }
  
};
