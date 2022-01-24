import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({theme}) => theme.colors.sellerPage.background};
`

export const CenterDiv = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ViewUserDiv = styled.div`
    display:flex;
    flex-direction: column;
    text-align: start;
    align-items: center;
    width: 100%;
    margin-top:.5rem;
`
export const PageContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

`

export const PageTitles = styled.h1`
    font-weight: 600;
    font-size:14px;
    width: 85%;
    margin-block:.5rem;
`

export const SellerDescription = styled.h1`
    font-weight: 500;
    font-size: 14px;
    width: 90%;
    text-align: center;
    font-size: 14px;
    color:${({ theme }) => theme.colors.detalhes};
`


