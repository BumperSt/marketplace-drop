import { AlingCenter, InputsContainer, LostPasswordText, ModalButton, ModalInput, ModalSelect, ModalSubTitle, ModalTitle, OurCreateNewText, TermsOfService } from "./modalStyle"
import {Modal} from "./modal"
import { useContext, useState } from "react"
import { Input } from "../Inputs/input"
import auth from "apiService/auth"
import UserContext, { IUserContext } from "@/context/userContext"
import { IUser } from "apiService/types/userTypes"

interface Props {
    closeModal: any
}


export const ModalLogin = ({closeModal}: Props) => {

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [modalType, setModalType] = useState<'Login' | 'Register' | 'LostPassword'>("Login")

    const [fullName, setFullName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")

    const {setUser} = useContext(UserContext)


    const Login = () => {
        auth.login({
            email,
            password
        }).then((response) => {
            setUser(response.data.user)
            localStorage.setItem('@token', response.data.token)

            closeModal()
        }).catch((error) => {
            console.log(error)
        })

    }

    const Register = () => {
        if(password == confirmPassword){
            auth.register({
                cpf,
                fullName,
                phone:phoneNumber,
                email,
                password,
            }).then((response) => {
                setUser(response.data.user)
                localStorage.setItem('@token', response.data.token)

                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }

    }


    if(modalType == 'Login'){
        return(
            <Modal backModal={() => closeModal()}>
                <AlingCenter>
                    <ModalTitle>Aliquam eget dui turpis.</ModalTitle>
                    <ModalSubTitle>Cras in dui nunc.</ModalSubTitle>
        
                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <ModalInput value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha"/>
                    <LostPasswordText onClick={() => setModalType('LostPassword')}>Esqueceu a senha? Clique aqui.</LostPasswordText>
                    <ModalButton onClick={() => Login()}>Acessar</ModalButton>
                    <OurCreateNewText>Ou</OurCreateNewText>
                    <ModalButton otherColor={true} onClick={() => setModalType('Register')}>Criar nova conta</ModalButton>

                </AlingCenter>

    
            </Modal>
        )
    }else if(modalType == 'Register'){
        return(
            <Modal backModal={() => setModalType('Login')}>

                    <ModalTitle style={{
                        fontSize:'24px',
                        maxWidth:'60%',
                        lineHeight:'28,13px',
                        marginBlock:'2rem'
                    }}>Lorem ipsum dolor sit amet.</ModalTitle>

                    <ModalInput value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nome Completo"/>
                    <ModalInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Telefone"/>
                    <ModalInput value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Cpf"/>
                    <InputsContainer>
                        <ModalInput style={{width:'50%'}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Data de nascimento"/>
                        <ModalSelect style={{width:'45%'}}>
                            <option value="" disabled selected>Genero</option>
                            <option value="hurr">Durr</option>
                        </ModalSelect>
                    </InputsContainer>
                    

                    <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <ModalInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                    <ModalInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a senha"/>
                    <ModalSelect>
                            <option value="" disabled selected>Tamanho (opcional)</option>
                            <option value="hurr">Durr</option>
                    </ModalSelect>
                    <TermsOfService>
                        <input type="checkbox" id="scales" name="scales" />
                        <h1>Concordo com os <span>termos de serviço.</span></h1>
                    </TermsOfService>


                <ModalButton onClick={()=> Register()}>Cadastrar</ModalButton>
    
            </Modal>
    
        )
    }else{
        return(
            <Modal backModal={() => setModalType('Login')}>
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