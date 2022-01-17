import { AlignRow, Container, ContainerInformation, EditIcon, InformationAlignCollum, InformationTitle, InformationValue, InfromationAlignRow, PessoalInformationTitle } from "./pessoalInformationSyles"

export const PessoalInformation = () => {
    return(
        <Container>
            <AlignRow>
                <PessoalInformationTitle>Informações pessoais</PessoalInformationTitle>
                <EditIcon size={16}/>
            </AlignRow>
            <ContainerInformation>
                <InfromationAlignRow>
                    <InformationAlignCollum>
                        <InformationTitle>NOME</InformationTitle>
                        <InformationValue>Johnes R.Doe</InformationValue>
                        <InformationTitle>E-MAIL</InformationTitle>
                        <InformationValue>johndoe@mail.com</InformationValue>
                    </InformationAlignCollum>
                    <InformationAlignCollum>
                        <InformationTitle>TELEFONE</InformationTitle>
                        <InformationValue>(12) 3456-7890</InformationValue>
                        <InformationTitle>CIDADE</InformationTitle>
                        <InformationValue>São Paulo, SP</InformationValue>
                    </InformationAlignCollum>
                </InfromationAlignRow>
               
            </ContainerInformation>
        </Container>
    )
}