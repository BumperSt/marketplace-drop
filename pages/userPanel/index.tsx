import { ActivyAdverts } from "@/components/ActivyAdverts/activyAdverts"
import { HeadBarPanel } from "@/components/HeadBarPanel/headBarPanel"
import { Notifications } from "@/components/Notifications/notifications"
import { PessoalInformation } from "@/components/PessoalInformation/pessoalInformation"
import { AlignRowInDesktop, CenterDiv, ContainerUserPanel } from "@/components/UserPanel/userPanelStyled"
import { ViewUser } from "@/components/ViewUser/viewUser"

const UserPanel = () => {
    return(
        <ContainerUserPanel>
            <HeadBarPanel/>
            <CenterDiv>
                <AlignRowInDesktop>
                    <ViewUser/>
                    <PessoalInformation/>    
                </AlignRowInDesktop>
                
                <ActivyAdverts/>
                <Notifications/>
            </CenterDiv>
        </ContainerUserPanel>

    )
}

export default UserPanel