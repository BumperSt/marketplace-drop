import Image from "next/image"
import { ImageDiv, ListImage, ProductImagensDiv, SmallImageDiv } from "./showAdvertImagensStyle"

const ShowAdvertImagens = () => {
    return(
        <ProductImagensDiv>
            <ImageDiv>
                <Image layout='fill' src="/temporary/productImage.png"/>
            </ImageDiv>
            <ListImage>
                <SmallImageDiv>                        
                    <Image layout='fill' src="/temporary/productImage.png"/>
                </SmallImageDiv>
                <SmallImageDiv>                        
                    <Image layout='fill' src="/temporary/productImage.png"/>
                </SmallImageDiv>                        
                <SmallImageDiv>                        
                    <Image layout='fill' src="/temporary/productImage.png"/>
                </SmallImageDiv>
            </ListImage>
        </ProductImagensDiv>
    )
}

export default ShowAdvertImagens