import { AlingCenter, InputsContainer, LostPasswordText, ModalButton, ModalInput, ModalSubTitle, ModalTitle, OurCreateNewText } from "./modalStyle"
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
    const [modalType, setModalType] = useState<'Login' | 'Register' | 'LostPassword'>("Login")

    if(modalType == 'Login'){
        return(
            <Modal backModal={() => setModalState(false)} setModalState={setModalState}>
                <AlingCenter>
                    <ModalTitle>Aliquam eget dui turpis.</ModalTitle>
                    <ModalSubTitle>Cras in dui nunc.</ModalSubTitle>
        
                    <ModalInput value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email"/>
                    <ModalInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha"/>
                    <LostPasswordText onClick={() => setModalType('LostPassword')}>Esqueceu a senha? Clique aqui.</LostPasswordText>
                    <ModalButton onClick={() => tempSetLoged(true)}>Acessar</ModalButton>
                    <OurCreateNewText>Ou</OurCreateNewText>
                    <ModalButton otherColor={true} onClick={() => setModalType('Register')}>Criar nova conta</ModalButton>

                </AlingCenter>

    
            </Modal>
        )
    }else if(modalType == 'Register'){
        return(
            <Modal backModal={() => setModalType('Login')} setModalState={setModalState}>

                    <ModalTitle style={{
                        fontSize:'24px',
                        maxWidth:'60%',
                        lineHeight:'28,13px',
                        marginBlock:'2rem'
                    }}>Lorem ipsum dolor sit amet.</ModalTitle>

                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nome Completo"/>
                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Telefone"/>
                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Cpf"/>
                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <ModalInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                    <ModalInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha"/>



                <ModalButton>Cadastrar</ModalButton>
    
            </Modal>
    
        )
    }else{
        return(
            <Modal backModal={() => setModalType('Login')} setModalState={setModalState}>
            <AlingCenter style={{
                marginBottom:'5rem'
            }}>
                <ModalTitle style={{
                    marginBottom: '1.5rem'
                }}>Maecenas eget porttitor magna. </ModalTitle>
    
                <ModalInput value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email ou telefone"/>
                <ModalButton>Redefinir</ModalButton>

            </AlingCenter>


        </Modal>
        )
    }
   
}