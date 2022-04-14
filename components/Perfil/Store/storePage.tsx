import { HeadBar } from "@/components/HeadBar/headBar"
import { Input } from "@/components/Inputs/input"
import useWindowDimensions from "helpers/screenSize"
import { useEffect, useState } from "react"
import { ContainerModel } from "../ContainerModel/ContainerModel"
import { InternalContainer } from "../ContainerModel/ContainerModelStyle"
import { AddButon, AlignStoreAndArrow, StoreDiv, StoreEditContainter, StoreName, StoreType, Arrow, SaveButton } from "./storePageStyles"

interface props {
    setEditOn:any
}


export const StoreEditPage = ({setEditOn} : props) => {

    const [editStore , setEditStore] = useState(false)
    const { height, width } = useWindowDimensions();

    const [StoreState, setStoreState] = useState("")

    const CloseEdit = () => {
        setEditStore(false)
    }

    useEffect(() =>{
        if(editStore){
            setEditOn(() =>  CloseEdit   )
           }
    }, [editStore])


    const getPage = () => {
            return  <InternalContainer >
            <StoreDiv>
                    <StoreType>ID DA LOJA</StoreType>
                    <AlignStoreAndArrow>
                        <StoreName>Sneaker Store</StoreName>
                        <Arrow size='25' onClick={()=> setEditStore(true)}/>
                    </AlignStoreAndArrow>
            </StoreDiv>

            <StoreDiv>
                    <StoreType>instagram</StoreType>
                    <AlignStoreAndArrow>
                        <StoreName>@sneakerstore</StoreName>
                        <Arrow size='25'/>
                    </AlignStoreAndArrow>
            </StoreDiv>

            <StoreDiv>
                <StoreType>whatsapp</StoreType>
                <AlignStoreAndArrow>
                    <StoreName>99999-9999</StoreName>
                    <Arrow size='25'/>
                </AlignStoreAndArrow>
                
            </StoreDiv>
            <StoreDiv>
                <StoreType>facebook</StoreType>
                <AlignStoreAndArrow>
                    <StoreName>facebook.com/sneakerstore</StoreName>
                    <Arrow size='25'/>
                </AlignStoreAndArrow>
                
            </StoreDiv>
            <AddButon>Visitar a loja</AddButon>

        </InternalContainer>
       
    }       

    
    return(
        <ContainerModel editOn={editStore}>
                {
                    getPage()                  
                }
            {
                editStore &&
                <StoreEditContainter>
                        <Input Title="NOME" value={StoreState} setValue={setStoreState}/>
                        <Input Title="Digite a senha para salvar" value={StoreState} setValue={setStoreState}/>

                        <SaveButton>Salvar</SaveButton>

                    </StoreEditContainter>
                }
          
                    
                
            
           
        </ContainerModel>
    )
}