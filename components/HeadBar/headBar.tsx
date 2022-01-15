import Image from "next/image";
import { useState } from "react";
import { ModalLogin } from "../Modal/modalLogin";
import { HeadBarContainer, LoginButton } from "./headBarStyle";

export const HeadBar = () => {
  const [stateLoginModal, setStateLoginModal] = useState(false);

  return (
    <>
      <HeadBarContainer>
        <Image
          title="Logo"
          alt="Logo"
          width="32"
          height="30"
          src="/icons/logo.webp"
        ></Image>
        <LoginButton onClick={() => setStateLoginModal(true)}>
          Entrar
        </LoginButton>
      </HeadBarContainer>

      {stateLoginModal && <ModalLogin setModalState={setStateLoginModal} />}
    </>
  );
};
