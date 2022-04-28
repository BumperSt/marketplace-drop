import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { AlignRow, AlingLoginAndInput, BackIcon, HeadBarContainer, BackIconDiv, LoggedTitleColor, LoginButton, LogoImagem, LogoutIcon, MenuIcon, SearchIcon, UserImage } from "./headBarStyle";
import {useRouter} from 'next/router'
import { Search } from "../Search/search";
import { PerfilPage } from "../Perfil/perfilPage";
import UserContext from "@/context/userContext";
import useWindowDimensions from "../../helpers/screenSize";
import { Input } from "../Inputs/input";

interface props {
    backFunction?: any,
    notLogo?:boolean,
    backIcon?:boolean,
    searchIcon?:boolean,
    logouButton?:boolean,
}

export const HeadBar = ({backFunction, notLogo, backIcon, logouButton, searchIcon} : props) => {

    const route = useRouter()
    const [stateLoginModal, setStateLoginModal] = useState<Boolean>(false);
    const [logged, setLogged] = useState<Boolean>(false);
    const [openSearch, setOpenSearch] = useState<Boolean>(false);
    const [openMenu, setOpenMenu] = useState<Boolean>(false);
    const { height, width } = useWindowDimensions();


    const {user, logOut} = useContext(UserContext)


    useEffect(() => {
        if(user){
            console.log(user)

            setLogged(true)
        }else{
            setLogged(false)

        }
    }, [user])

    const  closeLoginModal = () => {
        setStateLoginModal(false)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    if(width < 768){
        if(backFunction){
            return(
                <HeadBarContainer >
                    <BackIcon onClick={() => backFunction() } size="32"/>
                    {
                        !notLogo &&
                    
                        <LogoImagem onClick={() => {
                            route.push('/') 
                            backFunction()
                        }}>
                            <Image  title="Logo" alt="Logo" layout="fill" src="/logos/LogoHeader.png"/>
                        </LogoImagem>
                    }
                    
                    {
                        searchIcon &&
                        <>
                            <SearchIcon onClick={() => setOpenSearch(true)} size='32'/>

                        </>
                        
                    }
                    
                    {
                            openSearch &&
                            <Search closeSearch={setOpenSearch}/>
                        }
                    {
                        logouButton &&
                        <LogoutIcon size="32" onClick={() => {
                            logOut()
                            backFunction()}}
                        />

                    }
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
    }else{
        if(backFunction){
            return(
                <HeadBarContainer >
                <BackIconDiv>
                        {
                            <LogoImagem onClick={() => {
                                route.push('/') 
                                backFunction()
                            }}>
                                <Image  title="Logo" alt="Logo" layout="fill" src="/logos/logoBlack.png"/>
                            </LogoImagem>
                        }
                        {
                            backIcon &&
                                <BackIcon onClick={() => backFunction() } size="32"/>
                        }
                        
                </BackIconDiv>


                    {
                        logged &&
                        <LogoutIcon size="32" onClick={() => {
                            logOut()
                            backFunction()}}
                            />

                    }
                </HeadBarContainer>
            )
        }else{
            return (
                <>
                    <HeadBarContainer>
                        <LogoImagem>
                            <Image onClick={() => route.push('/')} title="Logo" alt="Logo" layout="fill" src="/logos/logoBlack.png"/>
                        </LogoImagem>
                        <AlingLoginAndInput>
                            <Search closeSearch={setOpenSearch}/>
                            {
                                !logged ?
                                <LoginButton  onClick={()=> setStateLoginModal(true)}>Entrar</LoginButton>
                                :
                                <UserImage>
                                    <Image onClick={()=> setOpenMenu(true)} title="Logo" alt="Logo" layout="fill" src="/temporary/adidas.png"/>
                                </UserImage>



                            }
                        </AlingLoginAndInput>
                       

                        {
                            openMenu&&
                            <PerfilPage closeModal={closeMenu}/>
                        }


            
                        
                        
                    </HeadBarContainer>
                    
                    {stateLoginModal && 
                        <ModalLogin closeModal={closeLoginModal}/>
                    }
                </>
            );
        }
    }  
};
