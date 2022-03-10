import { HeadBar } from "@/components/HeadBar/headBar"
import { useState } from "react"
import { AddButon, AlignAndressAndArrow, AndressContiner, AndressDiv, AndressName, AndressType, Arrow, Container, InputDiv, InputDivRow, InputEditAndress, InputName, SaveButton } from "./andressPageStyles"

interface Props {
    closePage: any
}

export const AndressPage = ({closePage} : Props) => {

    const [editAndress , setEditAndress] = useState(false)

    const CloseEdit = () => {
        setEditAndress(false)
    }
    return(
        <Container>
            {
                editAndress ?
                <>
                    <HeadBar backFunction={CloseEdit}/>
                    <AndressContiner>
                        <InputDiv>
                            <InputName>NOME</InputName>
                            <InputEditAndress/>
                        </InputDiv>
                        <InputDiv>
                            <InputName>CEP</InputName>
                            <InputEditAndress/>
                        </InputDiv>
                        <InputDiv>
                            <InputName>ENDEREÇO</InputName>
                            <InputEditAndress/>
                        </InputDiv>
                        <InputDiv>
                            <InputName>BAIRRO</InputName>
                            <InputEditAndress/>
                        </InputDiv>

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

                    </AndressContiner>
                </>
                :
                <>
                    <HeadBar backFunction={closePage}/>

                    <AndressContiner>
                        <AndressDiv>
                                <AndressType>PADRÃO</AndressType>
                                <AlignAndressAndArrow>
                                    <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                    <Arrow onClick={()=> setEditAndress(true)}/>
                                </AlignAndressAndArrow>
                        </AndressDiv>

                        <AndressDiv>
                                <AndressType>CASA</AndressType>
                                <AlignAndressAndArrow>
                                    <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                    <Arrow/>
                                </AlignAndressAndArrow>
                        </AndressDiv>

                        <AndressDiv>
                            <AndressType>TRABALHO</AndressType>
                            <AlignAndressAndArrow>
                                <AndressName>Rua dos Snekaers, 113 -a</AndressName>
                                <Arrow/>
                            </AlignAndressAndArrow>
                            
                        </AndressDiv>
                        <AddButon>Adicionar</AddButon>
                    </AndressContiner>
                </>
            }
           
        </Container>
    )
}