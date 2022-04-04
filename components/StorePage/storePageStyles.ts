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
`

export const PageContent = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: .25rem;
    padding-inline: 1rem;
`

export const StoreWallpaper = styled.div`
    width: 100%;
    height: 5rem;
    position: relative;
`

export const ProfilePictureImage = styled.div`
    position: absolute;
    width: 4rem;
    height: 4rem;
    border:solid 3px white;
    bottom: .25rem;
    border-radius: 100%;
`

export const StoreName = styled.h1`
    font-size:24px;
    font-weight: 600;
    color:${({theme }) => theme.colors.fonts[0]};
`
export const RowDiv = styled.div`
    display:flex;
    flex-direction: row;
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
`
export const InstaIcon = styled(FaInstagram)`
`

export const WppIcon = styled(FaWhatsapp)`

`

export const StorePageButton = styled.button`
    margin-top: .5rem;
    background-color:white;
    border:solid 1px ${({ theme }) => theme.colors.stroke};
    color:black;
    border-radius: 5px;
    padding: .5rem;
`

export const FilterButton = styled.button<{active?: boolean}>`
    border:${({active, theme}) => active && `solid 1px ${theme.colors.stroke}`};
    margin-top: .5rem;
    background-color:white;
    color:black;
    border-radius: 5px;
    font-weight: 900;
    padding-inline: .5rem;
    padding-block: .3rem;
    font-size: 10px;
`

export const AdvertsDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
    
`

export const AvaliationDiv = styled.div`
    display:flex;
    flex-direction: column; 
    text-align  : center;
    align-items: center;
    
`

export const AvaliationTitle = styled.h1`
    font-size:14px;
    font-weight: 600;
    margin-block: .5rem;
`

export const AvaliationPostButton = styled.button`
    padding-inline: 1.2rem;
    padding-block: .5rem;
    margin-block:.8rem;
    border-radius: 5px;
`



export const AvaliationComments = styled.div`
    display:flex;
    flex-direction: column;
    text-align: start;
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
    justify-content: space-between;
    flex-direction: row;
`


export const AvaliationCommentTitle = styled.div`
    font-size:11px;
    font-weight: 500;
`
export const UserNameComment = styled.span`
    font-size:11px;
    font-weight: 900;
`

export const AvaliationComment = styled.h1`
    padding-block: .1rem;
    font-size:11px;
    font-weight: 500;
`