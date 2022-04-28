import UserContext from "@/context/userContext"
import useWindowDimensions from "helpers/screenSize"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from "react"
import { HeadBar } from "../HeadBar/headBar"
import { Modal } from "../Modal/modal"
import { ModalButton } from "../Modal/modalStyle"
import { AdvertsPage } from "./Adverts/AdvertsPage"
import { AndressPage } from "./Andress/andressPage"
import { disableBodyScroll, enableBodyScroll,  } from 'body-scroll-lock';

import { AdIcon, AlingProfileAndIcon, Container, ContainerOpenInDesktop, LogoutIcon, ProfileName, ProfilePageButton, StoreIcon, TemporaryCrown, TruckIcon, UserIcon, AlingMenuInCollum } from "./perfilPageStyle"
import { RegistrationData } from "./RegistrationData/registrationData"
import { StoreEditPage } from "./Store/storePage"
import { ModalToManageAdvert } from "./Adverts/modalToManageAdvert"


interface Props {
    closeModal:any
}

export const PerfilPage = ({closeModal}: Props) => {


    const  [pageOpen, setPageOpen ] = useState('')
    const pageOpenValue = {pageOpen, setPageOpen }


    useEffect(() => {
        setPageOpen('')
    },[])

    
    useEffect(() => {
        console.log(pageOpen)
    },[pageOpen])

    const { height, width } = useWindowDimensions();
    const [editOn, setEditOn] = useState(null)
    const [backFunction, setBackFunction] = useState(null)
    const {user, logOut} = useContext(UserContext)
    const [modalDesktopStyle, setModalDesktopStyle] = useState({
        width: '6rem',
        height: 'auto',
        border:'solid 2px #CDCDCD',
        borderRadius: '15px',
    })


    useEffect(() => {
        console.log(backFunction)
    }, [backFunction])

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
                    <ProfilePageButton active={pageOpen == page.pageName} key={index} onClick={() => {setPageOpen(page.pageName)}}>
                        {page.icon}{page.title}
                    </ProfilePageButton>
                ))
            }
        </>
        
    }

    useEffect(() => {
        if(pageOpen != ''){
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
    }, [pageOpen])

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
        setPageOpen('')
        enableBodyScroll(document.body)
    }

    
    if(width < 768){
        return(
            <Modal backModal={closeModal}>
                {
                    pageOpen == 'Adverts' ?
                        <HeadBar searchIcon={true} backFunction={editOn ? closeEdit:closePage}/>
                    :
                    pageOpen != '' ?
                        <HeadBar backFunction={editOn ? closeEdit:closePage}/>
                    :
                        <HeadBar  backFunction={closeModal}/>

                }
                    {
                        pageOpen == 'Andress' ?
                            <AndressPage setEditOn={setEditOn}/>
                        :pageOpen == 'Adverts' ?
                            <AdvertsPage  setEditOn={setEditOn}/>
                        :pageOpen == 'RegistrationData'?
                            <RegistrationData setEditOn={setEditOn}/>
                        :pageOpen == 'Store' ?
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
            <Modal modalStyleDesktop={pageOpen != '' ? modalDesktopStyle : {
                ...modalDesktopStyle,
                position:'absolute',
                top: '1.7rem',
                right:'.5rem'
            } } backModal={closeModal}>
                {
                    pageOpen == '' ?
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
                            pageOpen == 'Andress' ?
                               <AndressPage setEditOn={setEditOn}/>
                            :pageOpen == 'Adverts' || pageOpen === 'ManageAdvert'  ?
                                <AdvertsPage setEditOn={setEditOn}/>
                            :pageOpen == 'RegistrationData'?
                                <RegistrationData setEditOn={setEditOn}/>
                            :pageOpen == 'Store' &&
                               <StoreEditPage setEditOn={setEditOn}/>
                           
                            
                            }

                        </ContainerOpenInDesktop>

                    </Container>

                }
            

            </Modal>
        )
    }
    
}