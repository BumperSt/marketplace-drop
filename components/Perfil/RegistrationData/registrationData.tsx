import { HeadBar } from "@/components/HeadBar/headBar";
import { ProfileName } from "../perfilPageStyle";
import { AlignRegistrationAndArrow, Container, RegistrationDataContiner, RegistrationDataDiv, RegistrationDataName, RegistrationDataType, RegistrationTitle } from "./registrationDataStyle";
import { useContext, useEffect } from "react";
import UserContext from "context/userContext";
import { Arrow } from "../Adverts/AdvertStyle";


interface Props {
    setEditOn: any
}

export const RegistrationData = ({setEditOn} : Props) => {

    const {user} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])

    
    return (
        <Container>
            <RegistrationTitle>Dados cadastrais</RegistrationTitle>
            <RegistrationDataContiner>
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

            </RegistrationDataContiner>
        </Container>
    );
}