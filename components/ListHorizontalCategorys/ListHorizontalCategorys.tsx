import UserContext from "@/context/userContext"
import category from "apiService/category"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { CategoryImage, CategoryImageDiv, ItemBackgroud, ItemCard, ItemsScrollList, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./ListHorizontalCategoryStyle"



export const ListHorizontalCategorys = () => {

    const router = useRouter()
    const [categorys, setCategorys] = useState(null)


    useEffect(() => {
        category.list().then(res => {
            console.log(res)
            setCategorys(res.data)
        })
    }, [])

    return(
        <ListHorizontaltemsContainer>
            <ListItemContainer>
                <ListItemsTitle>Categorias</ListItemsTitle>
                <ItemsScrollList>
                    {
                        [1,2,3,4].map((item) => (
                            <ItemCard key={item} onClick={() => router.push('/productPage')}>
                                <ItemBackgroud>
                                    <CategoryImageDiv>
                                        <CategoryImage>
                                            <Image alt="teste" title="teste" layout="fill" src="/temporary/adidas.svg"/>
                                        </CategoryImage>
                                    </CategoryImageDiv>
                                    
                                    <Image alt="teste" title="teste" layout="fill"src="/home/category.png"></Image>
                                </ItemBackgroud>
                            </ItemCard>
                        ))
                    }
                </ItemsScrollList>
            </ListItemContainer>
        </ListHorizontaltemsContainer>
    )   
}