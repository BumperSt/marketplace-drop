import { Container, ContainerNotifications, NotificationDate, NotificationsScroll, NotificationDescreptions, NotificationDiv, QuestionIcon, NotificationsTitle, AlertIcon, UserNameQuestion, ProductNameQuestion, AlignColumn } from "./notificationsStyle"

const AlertNotification = ({text, date}) => {
    return(
        <NotificationDiv>
            <AlertIcon size='1.5rem'/>

            <NotificationDescreptions>{text}</NotificationDescreptions>

            <NotificationDate>{date}</NotificationDate>
        </NotificationDiv>
    )
}


const InterectNotification = ({text, date}) => {
    return(
        <NotificationDiv>
            <QuestionIcon size='1.5rem'/>
                <NotificationDescreptions><UserNameQuestion>RJOA06896</UserNameQuestion> perguntou em <ProductNameQuestion>NIKE SNEAKERS PRO...</ProductNameQuestion> Cras ultricies turpis mi, non ultrices orci gravi...</NotificationDescreptions>
            <NotificationDate>{date}</NotificationDate>
        </NotificationDiv>
    )
}




export const Notifications = () => {

    const maps = [1,2,3,4,5,6,7,8,9,10]

    return(
        <Container>
            <NotificationsTitle>Notificações</NotificationsTitle>
            <ContainerNotifications>
            <NotificationsScroll>
                <AlertNotification date="1d" text="Aenean tincidunt pretium enim et suscipit. Fusce imperdiet iaculis justo sit amet rutrum."/>
                {
                    
                    maps.map((key) => (
                        <InterectNotification key={key} date="1d" text="Aenean tincidunt pretium enim et suscipit. Fusce imperdiet iaculis justo sit amet rutrum."/>

                    ))
                }
            
            </NotificationsScroll>


            </ContainerNotifications>
        </Container>
    )
}