import Image from "next/image"
import { AlingCarrouselBalls, CarrouselBall, ClickNextImage, Container, ImageContent } from "./homeCarrouselStyle"

const HomeCarrousel = () => {
    return(
        <Container>
            <ImageContent>
                <Image  layout="fill" src={'/temporary/itensLarge.jpg'}/>
                <ClickNextImage size="52" color="white" />
                <ClickNextImage  size="52"color="white" rigth={true}/>
                <AlingCarrouselBalls>
                    <CarrouselBall active={true}/>
                    <CarrouselBall/>
                    <CarrouselBall/>
                    <CarrouselBall/>

                </AlingCarrouselBalls>
            </ImageContent>
        </Container>
    )
}

export default HomeCarrousel