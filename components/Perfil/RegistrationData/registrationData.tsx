import { HeadBar } from "@/components/HeadBar/headBar";
import { ProfileName } from "../perfilPageStyle";
import { AlignRegistrationAndArrow, Container, RegistrationDataContiner, RegistrationDataDiv, RegistrationDataName, RegistrationDataType } from "./registrationDataStyle";
import { useContext, useEffect } from "react";
import UserContext from "context/userContext";
import { Arrow } from "../Adverts/AdvertStyle";


interface Props {
    closePage: any
}

export const RegistrationData = ({closePage} : Props) => {

    const {user} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <Container>
            <HeadBar backFunction={closePage}/>
            <ProfileName>Dados cadastrais</ProfileName>
            <RegistrationDataContiner>
                <RegistrationDataDiv>
                        <RegistrationDataType>NOME</RegistrationDataType>
                        <AlignRegistrationAndArrow>
                            <RegistrationDataName>{user.fullName}</RegistrationDataName>
                            <Arrow/>
                        </AlignRegistrationAndArrow>
                </RegistrationDataDiv>

                <RegistrationDataDiv>
                        <RegistrationDataType>E-MAIL</RegistrationDataType>
                        <AlignRegistrationAndArrow>
                            <RegistrationDataName>{user.email}</RegistrationDataName>
                            <Arrow/>
                        </AlignRegistrationAndArrow>
                </RegistrationDataDiv>

                <RegistrationDataDiv>
                    <RegistrationDataType>DATA DE NASC.</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>DD/MM/YYYY</RegistrationDataName>
                        <Arrow/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>
                
                <RegistrationDataDiv>
                    <RegistrationDataType>GÊNERO</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>Masculino</RegistrationDataName>
                        <Arrow/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

                
                <RegistrationDataDiv>
                    <RegistrationDataType>TELEFONE</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>{user.phone[0]}</RegistrationDataName>
                        <Arrow/>
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

                
                <RegistrationDataDiv>
                    <RegistrationDataType>TAMANHOS</RegistrationDataType>
                    <AlignRegistrationAndArrow>
                        <RegistrationDataName>42</RegistrationDataName>
                        <RegistrationDataName>44</RegistrationDataName>

                        <Arrow/>
                        
                    </AlignRegistrationAndArrow>                    
                </RegistrationDataDiv>

            </RegistrationDataContiner>
        </Container>
    );
}