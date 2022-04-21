import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.body};
    display:flex;
    flex-direction: column;
`

export const HeadDiv= styled.div`
    display:flex;
    position: relative;
    flex-direction: column;
    padding-inline: 1rem;
    @media(min-width:768px){
        flex-direction: row;
        padding-block: .5rem;
    }
`

export const RowReverseInDesktop = styled.div`
    display:flex;
    flex-direction: row;
`

export const PageContent = styled.div`
    display:flex;
    flex-direction: column;

    margin-top: .25rem;
`

export const StoreWallpaper = styled.div`
    width: 100%;
    height: 5rem;
    position: relative;
    @media(min-width: 768px){
        height:3rem;
    }
`



export const ProfilePictureImage = styled.div`
    position: absolute;
    width: 4rem;
    height: 4rem;
    border:solid 3px white;
    border-radius: 100%;
    top: -20%;
    left: 1rem;
    transform: translateY(-25%);
    @media(min-width: 768px){
        width: 2.5rem;
        height: 2.5rem;
        top: 60%;
        transform: translateY(-50%);


    }
`

export const StoreName = styled.h1`
    font-size:24px;
    font-weight: 600;
    color:${({theme }) => theme.colors.fonts[0]};

`
export const RowDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    @media(min-width: 768px){
        flex-direction: row;

    }
`

export const RowFilter = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:.5rem;
    @media(min-width:768px){
        width:8rem;
        padding:.25rem;

    }
`


export const CollumDiv = styled.div`
    display:flex;
    flex-direction: column;
`

export const SocialIcons = styled.div`
    margin-top: .25rem;
    display:flex;
    flex-direction: row;
    padding-block: .5rem;
    
`

export const FaceIcon = styled(FaFacebookF)`
    margin-inline: .5rem;
    :hover{
        cursor: pointer;
    }
`
export const InstaIcon = styled(FaInstagram)`
    :hover{
        cursor: pointer;
    }
`

export const WppIcon = styled(FaWhatsapp)`
    :hover{
        cursor: pointer;
    }
`

export const StorePageButton = styled.button`
    background-color:white;
    border:solid 1px ${({ theme }) => theme.colors.stroke};
    color:black;
    border-radius: 5px;
    padding: .5rem;
    @media(min-width:768px){
        font-size:14px;
        padding-block: .25rem;
        padding-inline: .5rem;
    }
    :hover{
        cursor: pointer;
    }
`

export const FilterButton = styled.button<{active?: boolean}>`
    border:${({active, theme}) => active && `solid 1px ${theme.colors.stroke}`};
    background-color:white;
    color:black;
    border-radius: 5px;
    font-weight: 900;
    padding-inline: .5rem;
    padding-block: .3rem;
    font-size: 10px;
    @media(min-width:768px){
        font-size:14px;
    }
`

export const AdvertsDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
    @media(min-width: 768px){
        align-items: flex-start;
        justify-content: flex-start;
        padding-inline:1rem;
    }
    
`

export const AvaliationDiv = styled.div`
    display:flex;
    flex-direction: column; 
    text-align  : center;
    align-items: center;
    @media(min-width:768px){
        flex-direction: row;
        padding-inline:1rem;
    }
`

export const AlingCollumInDesktop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    @media(min-width:768px){
        width: 50%;
        border-right: 3px solid ${({ theme }) => theme.colors.vipAnuncioBackground};
    }
`

export const AvaliationTitle = styled.h1`
    font-size:14px;
    font-weight: 600;
    margin-block: .5rem;
    @media(min-width: 768px){
        font-size:24px;
        margin-block: .25rem;

    }
`

export const AvaliationPostButton = styled.button`
    padding-inline: 1.2rem;
    padding-block: .5rem;
    margin-block:.8rem;
    border-radius: 5px;
    @media(min-width:768px){
        font-size:18px;
        align-items: flex-end;
        padding-inline: .5rem;
        padding-block: .2rem;
    }
`



export const AvaliationComments = styled.div`
    display:flex;
    flex-direction: column;
    text-align: start;
    @media(min-width:768px){
        margin-left: 2rem;
    }
`

export const AvaliationCommentDiv = styled.div`
    background-color:${({theme}) => theme.colors.vipAnuncioBackground};
    padding-block:.5rem;
    padding-inline:.8rem;
    margin-block:.25rem;
    border-radius: 5px;
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
`


export const AvaliationCommentTitle = styled.div`
    font-size:11px;
    font-weight: 500;
    margin-right: .25rem;
    @media(min-width:768px){
        font-size:18px;
    }
`
export const UserNameComment = styled.span`
    font-size:11px;
    font-weight: 900;
    @media(min-width:768px){
        font-size:18px;
    }
`

export const AvaliationComment = styled.h1`
    padding-block: .1rem;
    font-size:11px;
    font-weight: 500;
    @media(min-width:768px){
        font-size:18px;
    }
`