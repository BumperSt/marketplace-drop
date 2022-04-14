import UserContext from "@/context/userContext"
import useWindowDimensions from "helpers/screenSize"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { Modal } from "../Modal/modal"
import { ModalButton } from "../Modal/modalStyle"
import { AdvertsPage } from "./Adverts/AdvertsPage"
import { ModalToManageAdvert } from "./Adverts/modalToManageAdvert"
import { AndressPage } from "./Andress/andressPage"
import { disableBodyScroll, enableBodyScroll,  } from 'body-scroll-lock';

import { AdIcon, AlingProfileAndIcon, Container, ContainerOpenInDesktop, LogoutIcon, ProfileName, ProfilePageButton, StoreIcon, TemporaryCrown, TruckIcon, UserIcon, AlingMenuInCollum } from "./perfilPageStyle"
import { RegistrationData } from "./RegistrationData/registrationData"
import { StoreEditPage } from "./Store/storePage"


interface Props {
    closeModal:any
}

export const PerfilPage = ({closeModal}: Props) => {

    const [openPage, setOpenPage] = useState('')
    const { height, width } = useWindowDimensions();
    const [editOn, setEditOn] = useState(null)
    const {user, logOut} = useContext(UserContext)
    const [modalDesktopStyle, setModalDesktopStyle] = useState({
        width: '6rem',
        height: 'auto',
        border:'solid 2px #CDCDCD',
        borderRadius: '15px',
    })

    const GetPageMenu = () => {
        const Pages = [
            {
                'title': 'Minha Loja',
                'pageName' : 'Store',
                'icon': <StoreIcon size='25'/>
            },
            {
                'title':'Meus anúncios',
                'pageName':'Adverts',
                'icon':<AdIcon size='25'/>
            },
            {
                'title':'Dados cadastrais',
                'pageName':'RegistrationData',
                'icon':<UserIcon size='25'/>
            },
            {
                'title':'Endereços',
                'pageName':'Andress',
                'icon':<TruckIcon size='25'/>
            }
        ]
        return <>

            {
                Pages.map((page, index) => (
                    <ProfilePageButton active={openPage == page.pageName} key={index} onClick={() => {setOpenPage(page.pageName)}}>
                        {page.icon}{page.title}
                    </ProfilePageButton>
                ))
            }
        </>
        
    }

    useEffect(() => {
        if(openPage != ''){
            disableBodyScroll(document.body)
            setModalDesktopStyle({
                width: '100%',
                height: '100%',
                border:'none',
                borderRadius: '0px',
                
            })
        }else{
            enableBodyScroll(document.body)
            setModalDesktopStyle({
                width: '6rem',
                height: 'auto',
                border:'solid 2px #CDCDCD',
                borderRadius: '15px',
            })
        }
    }, [openPage])

    useEffect(() => {
        console.log(editOn)
    }, [editOn])

    let myUrl = window.location.pathname
    const Router = useRouter()
    

    const closeEdit = () => {
        setEditOn(false)
        editOn()
    }

    const closePage  = () => {
        setOpenPage('')
        enableBodyScroll(document.body)
    }

    
    if(width < 768){
        return(
            <Modal backModal={closeModal}>
                {
                    openPage != '' ?
                        <HeadBar backFunction={editOn ? closeEdit:closePage}/>
                    :
                        <HeadBar  backFunction={closeModal}/>

                }
                {
                    openPage == 'Andress' ?
                        <AndressPage setEditOn={setEditOn}/>
                    :openPage == 'Adverts'  ?
                        <AdvertsPage setEditOn={setEditOn}/>
                    :openPage == 'RegistrationData'?
                        <RegistrationData setEditOn={setEditOn}/>
                    :openPage == 'Store' ?
                        <StoreEditPage setEditOn={setEditOn}/>
                    :
                    <Container>
                        <AlingProfileAndIcon>
                            <ProfileName>Sneaker Store</ProfileName>
                            <TemporaryCrown/>
                        </AlingProfileAndIcon>
                        {
                        GetPageMenu()
                        }
                        <ModalButton >Vender agora</ModalButton>
                    
                    </Container>
                    
                }
 
            </Modal>
        )
    }else{
        return(
            <Modal modalStyleDesktop={openPage != '' ? modalDesktopStyle : {
                ...modalDesktopStyle,
                position:'absolute',
                top: '1.7rem',
                right:'.5rem'
            } } backModal={closeModal}>
                {
                    openPage == '' ?
                    <Container>

                        {
                            GetPageMenu()

                        }
                        <ProfilePageButton style={{
                            color:'red'
                        }}onClick={()=> {logOut() 
                            closeModal()}}>
                            <LogoutIcon size='25'/>Sair
                        </ProfilePageButton>
                    </Container>
                    :
                    
                    <Container>
                        <HeadBar backFunction={closePage}/>
                        <ContainerOpenInDesktop>
                            <AlingMenuInCollum>
      
                                {
                                    GetPageMenu()
                                }

                            </AlingMenuInCollum>
                            {
                               openPage == 'Andress' ?
                               <AndressPage setEditOn={setEditOn}/>
                           :openPage == 'Adverts'  ?
                               <AdvertsPage setEditOn={setEditOn}/>
                           :openPage == 'RegistrationData'?
                               <RegistrationData setEditOn={setEditOn}/>
                           :openPage == 'Store' &&
                               <StoreEditPage setEditOn={setEditOn}/>
                           
                            
                            }
                        </ContainerOpenInDesktop>
                    </Container>
                }
            

            </Modal>
        )
    }
    
}