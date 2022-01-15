import { LineStyled, ModalButton, ModalInput, ModalSubTitle, ModalTextDescription, ModalTitle } from "./modalStyle"
import {Modal} from "./modal"
import { useState } from "react"

interface Props {
    setModalState:any
}


export const ModalLogin = ({setModalState}: Props) => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return(
        <Modal setModalState={setModalState}>

            <ModalTitle>Aliquam eget dui turpis.</ModalTitle>
            <ModalSubTitle>Cras in dui nunc.</ModalSubTitle>

            <ModalInput value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email"/>
            <ModalInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha"/>

            <ModalButton>Acessar</ModalButton>

            <ModalTextDescription style={{
                marginTop:'1rem'
            }} FirstColor={true}>Duis lacinia semper commodo.</ModalTextDescription>

            <LineStyled/>

            <ModalTextDescription style={{
                marginBottom:'1rem'
            }}>Maecenas iaculis lobortis ultricies?</ModalTextDescription>
        </Modal>

    )
}