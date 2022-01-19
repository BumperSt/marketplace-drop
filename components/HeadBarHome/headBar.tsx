import Image from "next/image";
import { useEffect, useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { AlignRow, HeadBarContainer, LoggedTitle, LoggedTitleColor, LoginButton } from "./headBarStyle";
import {useRouter} from 'next/router'
export const HeadBarHome = () => {

    const route = useRouter()
    const [stateLoginModal, setStateLoginModal] = useState<Boolean>(false);
    const [logged, setLogged] = useState<Boolean>(false);


  useEffect(() => {
    if(logged) {
        setStateLoginModal(false)
    }
  }, [logged])

  return (
    <>
        <HeadBarContainer>
            <Image title="Logo" alt="Logo" width="32" height="30" src="/icons/logo.webp"/>

            {
                !logged ? 
                <LoginButton onClick={() => setStateLoginModal(true)}>Entrar</LoginButton>
                :
                <AlignRow onClick={() => route.push('userPanel')}>
                    <LoggedTitle>Olá, <LoggedTitleColor>Jonas</LoggedTitleColor></LoggedTitle>
                    <Image src="/temporary/headIcon.png" width="32" height="32"/>
                </AlignRow>

            }

        </HeadBarContainer>
        
        {stateLoginModal && 
            <ModalLogin tempSetLoged={setLogged} setModalState={setStateLoginModal} />
        }
    </>
  );
};
