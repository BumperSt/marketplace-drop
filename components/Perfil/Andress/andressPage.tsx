import { HeadBar } from "@/components/HeadBar/headBar"
import { Input } from "@/components/Inputs/input"
import { useEffect, useState } from "react"
import { AddButon, AlignAndressAndArrow, AndressContiner, AndressDiv, AndressEditContainter, AndressName, AndressType, Arrow, Container, InputDiv, InputDivRow, InputEditAndress, InputName, SaveButton } from "./andressPageStyles"

interface props {
    setEditOn:any
}


export const AndressPage = ({setEditOn} : props) => {

    const [editAndress , setEditAndress] = useState(false)

    const [andressName, setAndressName] = useState("")

    const CloseEdit = () => {
        setEditAndress(false)
    }

    useEffect(() =>{
        if(editAndress){
            setEditOn(() =>  CloseEdit   )
        }
    }, [editAndress])

    
    return(
        <Container>
            {
                editAndress ?
                <>
                    <AndressEditContainter>
                        <Input Title="NOME" value={andressName} setValue={setAndressName}/>
                        <Input Title="CEP" value={andressName} setValue={setAndressName}/>
                        <Input Title="ENDEREÇO" value={andressName} setValue={setAndressName}/>
                        <Input Title="BAIRRO" value={andressName} setValue={setAndressName}/>
                        <Input Title="PAIS" value={andressName} setValue={setAndressName}/>
                        <Input Title="Digite a senha para salvar" value={andressName} setValue={setAndressName}/>
                        <InputDivRow>
                            <InputDiv style={{width:'50%'}}>
                                <InputName>CIDADE</InputName>
                                <InputEditAndress/>
                            </InputDiv>
                            <InputDiv style={{width:'30%'}}>
                                <InputName>ESTADO</InputName>
                                <InputEditAndress/>
                            </InputDiv>
                        </InputDivRow>
                        <InputDiv>
                            <InputName>PAIS</InputName>
                            <InputEditAndress/>
                        </InputDiv>
                        <InputDiv>
                            <InputName>Digite a senha para salvar</InputName>
                            <InputEditAndress/>
                        </InputDiv>
                        <SaveButton>Salvar</SaveButton>

                    </AndressEditContainter>
                </>
                :
                <>
                    <AndressContiner>
                        <AndressDiv>
                                <AndressType>PADRÃO</AndressType>
                                <AlignAndressAndArrow>
                                    <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                    <Arrow size='25' onClick={()=> setEditAndress(true)}/>
                                </AlignAndressAndArrow>
                        </AndressDiv>

                        <AndressDiv>
                                <AndressType>CASA</AndressType>
                                <AlignAndressAndArrow>
                                    <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                    <Arrow size='25'/>
                                </AlignAndressAndArrow>
                        </AndressDiv>

                        <AndressDiv>
                            <AndressType>TRABALHO</AndressType>
                            <AlignAndressAndArrow>
                                <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                <Arrow size='25'/>
                            </AlignAndressAndArrow>
                            
                        </AndressDiv>
                        <AddButon>Adicionar</AddButon>
                    </AndressContiner>
                </>
            }
           
        </Container>
    )
}