import {Container, ContainerEditInfo, ChangeImageText,AlignRow, SaveInfosButton, AlingRowInDesktop, ContainerPassword, Title, ContainerEditInfoPassword } from "./editInformationStyle"
import {Input} from '../Inputs/input'
import { useState } from "react"
import { ProfileImageDiv, ProfilePicture } from "../ViewUser/viewUserStyled"
import Image from "next/image"
export const EditInformations = () => {

    const [exibicionName, setExibicionName] = useState('')
    const [name, setName] = useState('')
    const [andress, setAndress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [actualPassword, setActualPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState()


    return(
        <>
            <Container>
                <ContainerEditInfo>
                    <AlignRow>
                            <ProfilePicture position="absolute" style={{
                                marginRight:'1rem'
                            }}>
                                <ProfileImageDiv>
                                    <Image src="/temporary/Profile.png" layout="fill"/>
                                </ProfileImageDiv>
                                
                                <ChangeImageText>Trocar foto</ChangeImageText>
                                <Title>Jonas Lanches</Title>

                            </ProfilePicture>

                        <Input Style={{
                            margimTop:'0px',
                        }} Title="Nome de exibição" value={exibicionName} setValue={setExibicionName}/>
                    </AlignRow>
                    <Input Title="Nome completo" value={name} setValue={setName}/>
                    <Input Title="Endereço" value={andress} setValue={setAndress}/>
                    <Input Title="Telefone" value={phoneNumber} setValue={setPhoneNumber}/>
                    <Input Title="Email" value={email} setValue={setEmail}/>
                    <Input Title="Data de nascimento" value={birthDate} setValue={setBirthDate}/>
                    <SaveInfosButton>Salvar</SaveInfosButton>

                    

                </ContainerEditInfo>
            </Container>
            <ContainerPassword>
                <Title>Redefinir senha</Title>
                <ContainerEditInfoPassword>
                        <AlingRowInDesktop>
                            <Input Title="Senha atual" value={actualPassword} setValue={setActualPassword}/>
                            <Input Title="Nova senha" value={newPassword} setValue={setNewPassword}/>
                            <Input Title="Confirmar nova senha" value={newPasswordConfirmation} setValue={setNewPasswordConfirmation}/>
                            <SaveInfosButton>Salvar</SaveInfosButton>
                        </AlingRowInDesktop>
                    </ContainerEditInfoPassword>
            </ContainerPassword>

        </>
    )
}