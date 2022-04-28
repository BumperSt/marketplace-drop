import { HeadBar } from "@/components/HeadBar/headBar";
import { ProfileName } from "../perfilPageStyle";
import { AlignRegistrationAndArrow, RegistrationDataDiv, RegistrationDataName, RegistrationDataType, RegistrationTitle } from "./registrationDataStyle";
import { useContext, useEffect } from "react";
import UserContext from "context/userContext";
import { Arrow } from "../Adverts/AdvertStyle";
import { ContainerModel } from "../ContainerModel/ContainerModel";
import { InternalContainer } from "../ContainerModel/ContainerModelStyle";


interface Props {
    setEditOn: any
}

export const RegistrationData = ({setEditOn} : Props) => {

    const {user} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])

    
    return (
        <ContainerModel>
            <RegistrationTitle>Dados cadastrais</RegistrationTitle>
            <InternalContainer pageName="registrationData" >
                <RegistrationDataDiv>
                        <RegistrationDataType>NOME</RegistrationDataType>
                        <AlignRegistrationAndArrow>
                            <RegistrationDataName>{user.fullName}</RegistrationDataName>
                            <Arrow size='25'/>
                        </AlignRegistrationAndArrow>
                </RegistrationDataDiv>

                <RegistrationDataDiv>
                        <RegistrationDataType>E-MAIL</RegistrationDataType>
                        <AlignRegistrationAndArrow>
                            <RegistrationDataName>{user.email}</RegistrationDataName>
                            <Arrow size='25'/>
                        </AlignRegistrationAndArrow>
                </RegistrationDataDiv>

                <RegistrationDataDiv>
                    <RegistrationDataType>DATA DE NASC.</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>DD/MM/YYYY</RegistrationDataName>
                        <Arrow size='25'/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>
                
                <RegistrationDataDiv>
                    <RegistrationDataType>GÊNERO</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>Masculino</RegistrationDataName>
                        <Arrow size='25'/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

                
                <RegistrationDataDiv>
                    <RegistrationDataType>TELEFONE</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>{user.phone[0]}</RegistrationDataName>
                        <Arrow size='25'/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

                
                <RegistrationDataDiv>
                    <RegistrationDataType>TAMANHOS</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>42</RegistrationDataName>
                        <RegistrationDataName>44</RegistrationDataName>

                        <Arrow size='25'/>
                        
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

            </InternalContainer>
        </ContainerModel>
    );
}