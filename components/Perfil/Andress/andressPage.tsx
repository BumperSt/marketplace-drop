import { HeadBar } from "@/components/HeadBar/headBar"
import { Input } from "@/components/Inputs/input"
import UserContext from "@/context/userContext"
import addres from "apiService/addres"
import useWindowDimensions from "helpers/screenSize"
import { useContext, useEffect, useState } from "react"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"
import { AddButon, AlignAndressAndArrow, AndressDiv, AndressEditContainter, AndressName, AndressType, Arrow, InputDivRow, InputEditAndress, InputName, SaveButton } from "./andressPageStyles"

interface props {
    setEditOn:any
}


export const AndressPage = ({setEditOn} : props) => {

    const [editAndress , setEditAndress] = useState(false)
    const { height, width } = useWindowDimensions();
    const {user} = useContext(UserContext)
    const [andressName, setAndressName] = useState("")
    const [zipCode, setZipCode] = useState(0 || null)
    const [complemento, setComplemento] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [addresses, setAddresses] = useState(null)
    const CloseEdit = () => {
        setEditAndress(false)
    }


    useEffect(() => {
        if(user){
            console.log(user)
            setAddresses(user.addresses)
        }
    }, [user])

    useEffect(() =>{
        if(editAndress){
            setEditOn(() =>  CloseEdit   )
           }
    }, [editAndress])

    const addAndress = () => {
        addres.addAddress({
            name: andressName,
            zipCode: zipCode,
            complement: complemento,
            state: state,
            city: city
        }).then((res) => {
            console.log(res)
            setAddresses(res.data.addresses)
        })

      
    }


    const getPage = () => {
        if(editAndress && width > 768 || !editAndress && width > 768 || !editAndress && width < 768){
            return  <InternalContainer  pageName="andress">
                {
                    addresses?.map((andres, index) => (
                        <AndressDiv key={index}>
                            <AndressType>{andres.name}</AndressType>
                            <AlignAndressAndArrow>
                                <AndressName>{andres.complement}</AndressName>
                                <Arrow size='25' onClick={()=> setEditAndress(true)}/>
                            </AlignAndressAndArrow>
                        </AndressDiv>
                    ) )
                }
        
            <AddButon onClick={() => setEditAndress(true)}>Adicionar</AddButon>

        </InternalContainer>
        }
    }       

    
    return(
        <ContainerModel   editOn={editAndress}>
                  {
                    getPage()                  
                }
            {
                editAndress &&
                <AndressEditContainter>
                        <Input Title="NOME" value={andressName} setValue={setAndressName}/>
                        <Input Title="CEP" value={zipCode} setValue={setZipCode}/>
                        <Input Title="ENDEREÇO" value={complemento} setValue={setComplemento}/>
                        <Input Title="ESTADO" value={state} setValue={setState}/>
                        <Input Title="CIDADE" value={city} setValue={setCity}/>
                        <Input Title="Digite a senha para salvar" value={andressName} setValue={setAndressName}/>
                        <InputDivRow>
                            <Input Style={{width:'50%'}} Title="CIDADE" value={andressName} setValue={setAndressName}/>
                            <Input Style={{width:'30%'}} Title="ESTADO" value={andressName} setValue={setAndressName}/>
                        </InputDivRow>
                        <Input Title="Digite a senha para salvar" value={andressName} setValue={setAndressName}/>

                        <SaveButton  onClick={() => addAndress()}>Salvar</SaveButton>

                    </AndressEditContainter>
                }
          
                    
                
            
           
        </ContainerModel>
    )
}