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

export const OpinionsDiv = styled.div`
    display:flex;
    flex-direction: column;
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-top: 1rem;
    background-color:${({ theme }) => theme.colors.productPrice.descreptionDiv};
    display:flex;
    flex-direction: column;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    overflow-y: auto;
    width: 90%;
`

export const OpnionDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin-block:.25rem;
`

export const OpinioDate = styled.h1`
    font-size: 9px;
    font-weight: 300;
`

export const OpinionText = styled.h1`
    font-size:10px;
    font-weight:400px;
`

export const OpinionName = styled.span`
    font-size:10px;
    font-weight: 600;
`
export const SeeMoreOpinion = styled.h1`
    width:100%;
    text-align:center;
    font-size:10px;
    font-weight: 600;
    margin-top: .5rem;
`
