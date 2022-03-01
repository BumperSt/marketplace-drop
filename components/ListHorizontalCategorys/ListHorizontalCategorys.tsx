import Image from "next/image"
import { useRouter } from "next/router"
import { CategoryImage, CategoryImageDiv, ItemBackgroud, ItemCard, ItemsScrollList, ListHorizontaltemsContainer, ListItemContainer, ListItemsTitle } from "./ListHorizontalCategoryStyle"



export const ListHorizontalCategorys = () => {

    const router = useRouter()

    return(
        <ListHorizontaltemsContainer>
            <ListItemContainer>
                <ListItemsTitle>Categorias</ListItemsTitle>
                <ItemsScrollList>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                            <ItemCard key={item} onClick={() => router.push('/productPage')}>
                                <ItemBackgroud>
                                    <CategoryImageDiv>
                                        <CategoryImage>
                                            <Image alt="teste" title="teste" layout="fill" src="/temporary/adidas.svg"/>
                                        </CategoryImage>
                                    </CategoryImageDiv>
                                    
                                    <Image alt="teste" title="teste" width="268" height="238" src="/temporary/adidas.png"></Image>
                                </ItemBackgroud>
                            </ItemCard>
                        ))
                    }
                </ItemsScrollList>
            </ListItemContainer>
        </ListHorizontaltemsContainer>
    )   
}