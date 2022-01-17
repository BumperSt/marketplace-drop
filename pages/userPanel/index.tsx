import { ActivyAdverts } from "@/components/ActivyAdverts/activyAdverts"
import { HeadBarPanel } from "@/components/HeadBarPanel/headBarPanel"
import { PessoalInformation } from "@/components/PessoalInformation/pessoalInformation"
import { CenterDiv, ContainerUserPanel } from "@/components/UserPanel/userPanelStyled"
import { ViewUser } from "@/components/ViewUser/viewUser"

const UserPanel = () => {
    return(
        <ContainerUserPanel>
            <HeadBarPanel/>
            <CenterDiv>
            

                <ViewUser/>
                <PessoalInformation/>
                <ActivyAdverts/>
            </CenterDiv>
        </ContainerUserPanel>

    )
}

export default UserPanel