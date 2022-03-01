import { useEffect, useRef } from "react";
import { ModalBackground, ModalContainer } from "./modalStyle"

interface Props {
    setModalState:any,
    children:any
}



export const Modal = ({children, setModalState}:Props) => {

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
                {children}
            </ModalContainer>
            
        </ModalBackground>

    )
}