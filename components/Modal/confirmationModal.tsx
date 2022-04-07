import styled from "styled-components"
import { Advert } from "../Perfil/Adverts/Advert"
import { Modal } from "./modal"
import { Container } from "./modalOfferStyles"
import { ModalSubTitle, ModalTitle } from "./modalStyle"

interface Props {
    setModalState:any,
}

export const Button = styled.button<{otherColor?:any}>`
    background-color: ${({theme, otherColor}) => otherColor ? 'black' : theme.colors.vipAnuncioBackground};
    color:${({otherColor}) => otherColor ? 'white' : 'black'};
    padding-block:.5rem;
    padding-inline:1rem;
`



export const ConfirmationModal = ({setModalState}: Props) => {
    return(
        <Modal modalStyle={{        
            width: "90vw",
            marginTop:'20%',
            height:"auto",
            borderRadius: "15px",
        }} backModal={setModalState}>
            <Container style={{
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                padding:'1rem'
            }}>
                <ModalTitle>Nulla tempus interdum tellus vel placerat?</ModalTitle>
                <ModalSubTitle>Donec facilisis cursus augue, vel convallis dolor volutpat eu.</ModalSubTitle>
                <Advert anuncio={{
                    'title' : 'NIKE SNEAKERS PRO STREET I',
                    'price' : '1599,99',
                    'id' : 1                            
                }}/>
                <div style={{display:'flex', justifyContent:'space-between', width:'90%', marginBlock:'1rem'}}>
                    <Button onClick={() => setModalState(false)}>Cancelar</Button>
                    <Button otherColor={true} onClick={() => setModalState(false)}>Sim, deletar</Button>
                </div>
            </Container>
        </Modal>
    )
}