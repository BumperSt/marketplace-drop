import { useEffect, useRef } from "react";
import { BackIcon, ModalBackground, ModalContainer } from "./modalStyle"

interface Props {
    setModalState:any,
    children:any,
    backModal:any
}



export const Modal = ({children, setModalState, backModal}:Props) => {

    const ref = useRef(null)

    const clickOutModal = (e) => {
        if (!ref.current.contains(e.target)) {
            console.log("oooo")
            setModalState(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", clickOutModal);
        return () => {
            document.removeEventListener("mousedown", clickOutModal);
        };
    }, []);
    

    return(
        <ModalBackground >
            <ModalContainer ref={ref}>
                <BackIcon onClick={() => backModal()}size="32"/>

                {children}
            </ModalContainer>
            
        </ModalBackground>

    )
}