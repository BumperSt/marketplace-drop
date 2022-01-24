import { BsQuestionCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    width: 90%;
    text-align:center;
`

export const NotificationsTitle = styled.h1`
    @media (max-width: 300px){
        font-size: .8rem;
    }
    font-weight: 700;

`

export const ContainerNotifications = styled.div`
    padding:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
`

export const NotificationsScroll = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height:9rem;
    padding-inline:.5rem;

`



export const NotificationDiv = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    text-align: start;
    background-color:#EEEEEE;
    border: 1px solid ${({ theme }) => theme.colors.stroke};;
    border-radius: 10px;
    margin-bottom: .5rem;
    padding:.5rem;
`

export const AlertIcon = styled(FiAlertTriangle)`
    margin-inline:.8rem;


`  

export const QuestionIcon = styled(BsQuestionCircle)`
    margin-inline:.8rem;

`

export const NotificationDescreptions = styled.h1`
    font-size: 9px;
    font-weight: 400;
    color:${({ theme }) => theme.colors.detalhes};
    max-width: 70%;

`

export const NotificationDate = styled(NotificationDescreptions)`
    font-size: 10px;
`

export const UserNameQuestion = styled.span`
    font-size: 9px;
    font-weight: 600;
    color:${({ theme }) => theme.colors.detalhes};
    color:${({ theme }) => theme.colors.texts.description};
`

export const ProductNameQuestion = styled(UserNameQuestion)`
    color:black;
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction:column;


`