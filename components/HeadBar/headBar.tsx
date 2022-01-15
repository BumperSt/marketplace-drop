import Image from "next/image";
import { useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { AlignRow, HeadBarContainer, LoggedTitle, LoggedTitleColor, LoginButton } from "./headBarStyle";

export const HeadBar = () => {

  const [stateLoginModal, setStateLoginModal] = useState(false);
  const [logged, setLogged] = useState(false)

  return (
    <>
        <HeadBarContainer>
            <Image title="Logo" alt="Logo" width="32" height="30" src="/icons/logo.webp"/>

            {
                !logged ? 
                <LoginButton onClick={() => setStateLoginModal(true)}>Entrar</LoginButton>
                :
                <AlignRow>
                    <LoggedTitle>Olá,<LoggedTitleColor>Jonas</LoggedTitleColor></LoggedTitle>
                    <Image src="/temporary/headIcon.png" width="32" height="32"/>
                </AlignRow>

            }

        </HeadBarContainer>
        
        {stateLoginModal && 
            <ModalLogin setModalState={setStateLoginModal} />
        }
    </>
  );
};
