import { InputsContainer, LineStyled, ModalButton, ModalInput, ModalSubTitle, ModalTextDescription, ModalTitle } from "./modalStyle"
import {Modal} from "./modal"
import { useState } from "react"
import { Input } from "../Inputs/input"

interface Props {
    setModalState:any,
    tempSetLoged: any
}


export const ModalLogin = ({setModalState, tempSetLoged}: Props) => {

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [confirmEmail, setConfirmEmail] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [modalType, setModalType] = useState<'Login' | 'Register'>("Login")

    if(modalType == 'Login'){
        return(
            <Modal setModalState={setModalState}>
                <ModalTitle>Aliquam eget dui turpis.</ModalTitle>
                <ModalSubTitle>Cras in dui nunc.</ModalSubTitle>
    
                <ModalInput value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email"/>
                <ModalInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha"/>
    
                <ModalButton onClick={() => tempSetLoged(true)}>Acessar</ModalButton>
    
                <ModalTextDescription onClick={(() => setModalType('Register'))} FirstColor={true}>Criar conta</ModalTextDescription>
    
                <LineStyled/>
    
                <ModalTextDescription style={{
                    marginBottom:'1rem'
                }}>Maecenas iaculis lobortis ultricies?</ModalTextDescription>
            </Modal>
        )
    }else{
        return(
            <Modal setModalState={setModalState}>
                <ModalTitle>Lorem ipsum dolor sit amet.</ModalTitle>
    
                <InputsContainer>
                    <Input value={email} setValue={setEmail} Title="E-mail"></Input>
                    <Input value={confirmEmail} setValue={setConfirmEmail} Title="Confirme o e-mail"></Input>
                    <Input value={password} setValue={setPassword} Title="Senha"></Input>
                    <Input value={confirmPassword} setValue={setConfirmPassword} Title="Confirme a senha"></Input>
                </InputsContainer>

                <ModalTextDescription onClick={(() => setModalType('Login'))} style={{
                    marginTop:'.7rem'
                }} FirstColor={true}>Acessar conta</ModalTextDescription>
                <LineStyled/>

                <ModalButton>Cadastrar</ModalButton>
    
            </Modal>
    
        )
    }
   
}