import { InputsContainer, ModalButton, ModalTitle } from "./modalStyle"
import {Modal} from "./modal"
import { useState } from "react"
import { Input } from "../Inputs/input"


interface Props {
    setModalState:any
}


export const ModalCadastro = ({setModalState}: Props) => {

    const [email, setEmail] = useState<string>("")
    const [confirmEmail, setConfirmEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    return(
        <Modal setModalState={setModalState}>
            <ModalTitle>Lorem ipsum dolor sit amet.</ModalTitle>

            <InputsContainer>
                <Input value={email} setValue={setEmail} Title="E-mail"></Input>
                <Input value={confirmEmail} setValue={setConfirmEmail} Title="Confirme o e-mail"></Input>
                <Input value={password} setValue={setPassword} Title="Senha"></Input>
                <Input value={confirmPassword} setValue={setConfirmPassword} Title="Confirme a senha"></Input>
            </InputsContainer>
            <ModalButton>Cadastrar</ModalButton>

        </Modal>

    )
}