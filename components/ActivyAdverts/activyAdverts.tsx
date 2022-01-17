import { ActivyAdvertsTitle, AdvertButton, AdvertsContainer, AdvertsScroll, Container } from "./activyAdvertsStyle"
import {EditOrExcludeAdverts} from '../EditOrExcludeAdverts/editOrExcludeAdverts'
import { useEffect, useState } from "react"
export const ActivyAdverts = () => {

    const [anuncios, SetAnuncions] = useState(null)

    useEffect(() => {
        let tempAnuncions = []
        for (let index = 0; index < 20; index++) {
            tempAnuncions.push({
                'title' : 'NIKE SNEAKERS PRO STREET I',
                'price' : '1599,99',
                'key' : index
            })
        }
        SetAnuncions(tempAnuncions)
    }, [])


    return(
        <Container>
            <ActivyAdvertsTitle>Anuncios Ativos</ActivyAdvertsTitle>
            <AdvertsContainer>


                <AdvertsScroll>
                    {
                        anuncios &&
                        anuncios.map((anuncio) => (
                            <EditOrExcludeAdverts key={anuncio.key}/>
                        ))
                    }
                </AdvertsScroll>
              

                <AdvertButton>Anunciar</AdvertButton>


            </AdvertsContainer>
        </Container>
    )
}