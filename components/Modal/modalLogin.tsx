import { AlingCenter, AlingEyePassword, BackIcon, ErrorText, Form, InputsContainer, LostPasswordText, ModalButton, ModalInput, ModalSelect, ModalSubTitle, ModalTitle, NotViewEye, OurCreateNewText, TermsOfService, ViewEye } from "./modalStyle"
import {Modal} from "./modal"
import { useContext, useEffect, useState } from "react"
import { Input } from "../Inputs/input"
import auth from "apiService/auth"
import UserContext, { IUserContext } from "@/context/userContext"
import { IUser } from "apiService/types/userTypes"
import { HeadBar } from "../HeadBar/headBar"
import { disableBodyScroll, enableBodyScroll,  } from 'body-scroll-lock';
import { Circles  } from 'react-loading-icons'

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
    const [birthDate, setBirthDate] = useState<string>("")
    const [viewPassword, setViewPassword] = useState('password')

    const [termsOfServiceAceept, setTermsOfServiceAceept] = useState(false)
    
    const {setUser} = useContext(UserContext)
    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(false)

    const closeModalHere = () => {
        closeModal()
        enableBodyScroll(document.body)
    }

    useEffect(() => {
        disableBodyScroll(document.body)
    }, [])

    const Login = () => {
        setLoading(true)
        setError('')
        auth.login({
            email,
            password
        }).then((response) => {
            setLoading(false)

            setUser(response.data.user)
            localStorage.setItem('@token', response.data.token)
            closeModalHere()
        }).catch((response) => {
            setLoading(false)

            setError('Credenciais inv??lidas')
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


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    if(modalType == 'Login'){
        return(
            <Modal backModal={() => closeModalHere()}>
                <HeadBar backIcon={true} notLogo={true} backFunction={closeModalHere}/>
                <AlingCenter>
                    <ModalTitle>Aliquam eget dui turpis.</ModalTitle>
                    <ModalSubTitle>Cras in dui nunc.</ModalSubTitle>
                    <Form onSubmit={handleSubmit}>
                        <ModalInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        <AlingEyePassword>
                            <ModalInput style={{
                                width: '100%',
                                margin:0,
                                
                            }} type={viewPassword} value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Senha"/>
                            {
                                viewPassword == 'password' ?
                                <NotViewEye size='32' onClick={() => setViewPassword('text')}/>

                                :
                                <ViewEye size='32' onClick={() => setViewPassword('password')}/>

                            }
                            
                        </AlingEyePassword>
                        {
                            loading &&
                                <Circles style={{
                                    marginBlock:'.5rem'
                                }} height={50} fill="black"/>
                        }
                        {
                            error &&
                                <ErrorText>{error}</ErrorText>
                        }
                        <LostPasswordText onClick={() => setModalType('LostPassword')}>Esqueceu a senha? Clique aqui.</LostPasswordText>
                        <ModalButton  type="submit" onClick={() => Login()}>Acessar</ModalButton>
                    </Form>

                    
                 
                    <OurCreateNewText>Ou</OurCreateNewText>
                    <ModalButton otherColor={true} onClick={() => setModalType('Register')}>Criar nova conta</ModalButton>

                </AlingCenter>

    
            </Modal>
        )
    }else if(modalType == 'Register'){
        return(
            <Modal backModal={() => setModalType('Login')}>
                <HeadBar backIcon={true} notLogo={true} backFunction={() => setModalType('Login')}/>

                    <ModalTitle style={{
                        maxWidth:'350px'
                    }}>Lorem ipsum dolor sit amet.</ModalTitle>
                    <Form onSubmit={handleSubmit}>

                        
                        <ModalInput value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nome Completo"/>
                        <ModalInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Telefone"/>
                        <ModalInput value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Cpf"/>
                        <InputsContainer>
                            <ModalInput style={{width:'50%'}} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} placeholder="Data de nascimento"/>
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
                        <TermsOfService onClick={() => setTermsOfServiceAceept(!termsOfServiceAceept)}>
                            <input checked={termsOfServiceAceept} onChange={(e) => setTermsOfServiceAceept(e.target.checked)} type="checkbox" id="scales" name="scales" />
                            <p>Concordo com os <span>termos de servi??o.</span></p>
                        </TermsOfService>


                    <ModalButton type="submit"  onClick={()=> Register()}>Cadastrar</ModalButton>
                </Form>
            </Modal>
    
        )
    }else{
        return(
            <Modal backModal={() => setModalType('Login')}>
                <HeadBar backIcon={true} notLogo={true} backFunction={() => setModalType('Login')}/>

            <AlingCenter style={{
                marginBottom:'5rem',
                width:'90%'
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