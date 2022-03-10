import { useEffect, useRef } from "react";
import { BackIcon, ModalBackground, ModalContainer } from "./modalStyle"

interface Props {
    children:any,
    backModal:any
}



export const Modal = ({children, backModal}:Props) => {

    const ref = useRef(null)

    const clickOutModal = (e) => {
        if (!ref.current.contains(e.target)) {
            backModal();
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