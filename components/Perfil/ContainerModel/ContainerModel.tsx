import { Container } from "./ContainerModelStyle"

export const ContainerModel = ({children, editOn}) => {
    return(
        <Container editOn={editOn}>
            {children}
        </Container>
    )
}