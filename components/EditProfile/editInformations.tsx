import {Container, ContainerEditInfo, ChangeImageText,AlignRow, SaveInfosButton } from "./editInformationStyle"
import {Input} from '../Inputs/input'
import { useState } from "react"
import { ProfilePicture } from "../ViewUser/viewUserStyled"
import Image from "next/image"
export const EditInformations = () => {

    const [exibicionName, setExibicionName] = useState('')

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
                    }} Title="Nome de exibiçaõ" value={exibicionName} setValue={setExibicionName}/>
                </AlignRow>
                <Input Title="Nome completo" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Endereço" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Telefone" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Email" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Data de nascimento" value={exibicionName} setValue={setExibicionName}/>
                <SaveInfosButton>Salvar</SaveInfosButton>
                <Input Title="Senha atual" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Nova senha" value={exibicionName} setValue={setExibicionName}/>
                <Input Title="Confirmar nova senha" value={exibicionName} setValue={setExibicionName}/>
                <SaveInfosButton>Salvar</SaveInfosButton>

            </ContainerEditInfo>
        </Container>
    )
}