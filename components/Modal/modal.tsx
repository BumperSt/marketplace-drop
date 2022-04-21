import useWindowDimensions from "helpers/screenSize";
import { useEffect, useRef } from "react";
import { BackIcon, ModalBackground, ModalContainer } from "./modalStyle"

interface Props {
    children:any,
    backModal:any,
    modalStyle?:any,
    modalStyleDesktop?:any,
    background?:boolean
}



export const Modal = ({children, backModal, modalStyle, modalStyleDesktop,background}:Props) => {
    const { height, width } = useWindowDimensions();

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
        <ModalBackground background={background} >
            <ModalContainer style={width < 768 ? modalStyle : modalStyleDesktop} ref={ref}>

                {children}
            </ModalContainer>
            
        </ModalBackground>

    )
}