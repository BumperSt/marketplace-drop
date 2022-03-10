import { EditInformations } from "@/components/EditProfile/editInformations"
import { CenterDiv, ContainerEditProfile } from "@/components/EditProfile/editProfileStyle"
import { HeadBar } from "@/components/HeadBar/headBar"
import { ViewUser } from "@/components/ViewUser/viewUser"
import { useEffect, useState } from "react"


const UserPanel = () => {
    const [innerWidth, setInnerWidth] = useState(null)
    const [innerHeight, setInnerHeight] = useState(null)


    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        })
    }, [])
    return(
        <ContainerEditProfile>
            <HeadBar/>
            <CenterDiv>

                    <ViewUser disableInDesktop={true}/>
                
                
                <EditInformations/>
            </CenterDiv>
        </ContainerEditProfile>

    )
}

export default UserPanel