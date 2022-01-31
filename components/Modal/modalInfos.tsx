import {AlignRowButtons, AlignRowInputs, InputsContainer, ModalButton, ModalTitle } from "./modalStyle"
import {Modal} from "./modal"
import { useState } from "react"
import { Input } from "../Inputs/input"


interface Props {
    setModalState:any
}


export const ModalInfos = ({setModalState}: Props) => {

    const [birthDate, setBirthDate] = useState<string>("")
    const [phoneNumber, setphoneNumber] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [andress, setAndress] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [distrit, setDistrit] = useState<string>("")
    
    return(
        <Modal setModalState={setModalState}>
            <ModalTitle>Nam convallis vehicula ipsum congue pellentesque.</ModalTitle>
            <InputsContainer>
                <Input value={birthDate} setValue={setBirthDate}  Title="Data de Nascimento *"></Input>
                <Input value={phoneNumber} setValue={setphoneNumber}  Title="Telefone *"></Input>
                <Input value={cpf} setValue={setCpf}  Title="CPF *"></Input>
                <Input value={cep} setValue={setCep}  Title="CEP"></Input>
                <Input value={andress} setValue={setAndress} type='andress' Title="Endereço *"></Input>
                <Input value={state} setValue={setState}  type='uf' Title="UF *"></Input>
                <Input  value={city} setValue={setCity}  type='city' Title="Cidade *"></Input>
                <Input value={distrit} setValue={setDistrit}  Title="Bairro *"></Input>
            </InputsContainer>
            <AlignRowButtons>
                <ModalButton onClick={() => setModalState(false)}>Sair</ModalButton>
                <ModalButton>Salvar</ModalButton>
            </AlignRowButtons>


        </Modal>

    )
}