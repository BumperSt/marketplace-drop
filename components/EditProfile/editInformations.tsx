import {Container, ContainerEditInfo, ChangeImageText,AlignRow, SaveInfosButton } from "./editInformationStyle"
import {Input} from '../Inputs/input'
import { useState } from "react"
import { ProfilePicture } from "../ViewUser/viewUserStyled"
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
        <Container>
            <ContainerEditInfo>
                <AlignRow>
                        <ProfilePicture style={{
                            marginRight:'1rem'
                        }}>
                            <Image src="/temporary/Profile.png" width="80" height="80"/>
                            <ChangeImageText>Trocar foto</ChangeImageText>

                        </ProfilePicture>

                    <Input Style={{
                        margimTop:'0px',
                        width: '65%',
                    }} Title="Nome de exibição" value={exibicionName} setValue={setExibicionName}/>
                </AlignRow>
                <Input Title="Nome completo" value={name} setValue={setName}/>
                <Input Title="Endereço" value={andress} setValue={setAndress}/>
                <Input Title="Telefone" value={phoneNumber} setValue={setPhoneNumber}/>
                <Input Title="Email" value={email} setValue={setEmail}/>
                <Input Title="Data de nascimento" value={birthDate} setValue={setBirthDate}/>
                <SaveInfosButton>Salvar</SaveInfosButton>
                <Input Title="Senha atual" value={actualPassword} setValue={setActualPassword}/>
                <Input Title="Nova senha" value={newPassword} setValue={setNewPassword}/>
                <Input Title="Confirmar nova senha" value={newPasswordConfirmation} setValue={setNewPasswordConfirmation}/>
                <SaveInfosButton>Salvar</SaveInfosButton>

            </ContainerEditInfo>
        </Container>
    )
}