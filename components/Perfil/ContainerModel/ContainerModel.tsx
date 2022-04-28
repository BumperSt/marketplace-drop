import { Container } from "./ContainerModelStyle"

interface ContainerModel {
    editOn?: boolean,
    style?: any,
    children?: any
}


export const ContainerModel  = ({children, editOn , style} : ContainerModel) => {
    return(
        <Container style={style}>
            {children}
        </Container>
    )
}