import { EditInformations } from "@/components/EditProfile/editInformations"
import { CenterDiv, ContainerEditProfile } from "@/components/EditProfile/editProfileStyle"
import { HeadBarPanel } from "@/components/HeadBarPanel/headBarPanel"
import { ViewUser } from "@/components/ViewUser/viewUser"


const UserPanel = () => {
    return(
        <ContainerEditProfile>
            <HeadBarPanel/>
            <CenterDiv>
                <ViewUser/>
                <EditInformations/>
            </CenterDiv>
        </ContainerEditProfile>

    )
}

export default UserPanel