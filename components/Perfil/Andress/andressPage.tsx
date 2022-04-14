import { HeadBar } from "@/components/HeadBar/headBar"
import { Input } from "@/components/Inputs/input"
import useWindowDimensions from "helpers/screenSize"
import { useEffect, useState } from "react"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"
import { AddButon, AlignAndressAndArrow, AndressDiv, AndressEditContainter, AndressName, AndressType, Arrow, InputDivRow, InputEditAndress, InputName, SaveButton } from "./andressPageStyles"

interface props {
    setEditOn:any
}


export const AndressPage = ({setEditOn} : props) => {

    const [editAndress , setEditAndress] = useState(false)
    const { height, width } = useWindowDimensions();

    const [andressName, setAndressName] = useState("")

    const CloseEdit = () => {
        setEditAndress(false)
    }

    useEffect(() =>{
        if(editAndress){
            setEditOn(() =>  CloseEdit   )
           }
    }, [editAndress])


    const getPage = () => {
        if(editAndress && width > 768 || !editAndress && width > 768 || !editAndress && width < 768){
            return  <InternalContainer>
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

        </InternalContainer>
        }
    }       

    
    return(
        <ContainerModel  editOn={editAndress}>
                  {
                    getPage()                  
                }
            {
                editAndress &&
                <AndressEditContainter>
                        <Input Title="NOME" value={andressName} setValue={setAndressName}/>
                        <Input Title="CEP" value={andressName} setValue={setAndressName}/>
                        <Input Title="ENDEREÇO" value={andressName} setValue={setAndressName}/>
                        <Input Title="BAIRRO" value={andressName} setValue={setAndressName}/>
                        <Input Title="PAIS" value={andressName} setValue={setAndressName}/>
                        <Input Title="Digite a senha para salvar" value={andressName} setValue={setAndressName}/>
                        <InputDivRow>
                            <Input Style={{width:'50%'}} Title="CIDADE" value={andressName} setValue={setAndressName}/>
                            <Input Style={{width:'30%'}} Title="ESTADO" value={andressName} setValue={setAndressName}/>
                        </InputDivRow>
                        <Input Title="Digite a senha para salvar" value={andressName} setValue={setAndressName}/>

                        <SaveButton>Salvar</SaveButton>

                    </AndressEditContainter>
                }
          
                    
                
            
           
        </ContainerModel>
    )
}