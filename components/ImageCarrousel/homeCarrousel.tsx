import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import { AlingCarrouselBalls, CarrouselBall, ClickNextImage, ClickNextImageDiv, Container, ImageContent } from "./homeCarrouselStyle"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarrousel = () => {
    return(
        <div class="carousel-wrapper">
            <Carousel
                showArrows={false} showThumbs={false} infiniteLoop useKeyboardArrows autoPlay
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    (
                        <ClickNextImageDiv>
                            <ClickNextImage  onClick={clickHandler} size="32" color="white" />
                        </ClickNextImageDiv>
                        

                    )
                    
                }
                renderArrowNext={(clickHandler, hasNext, labelNext) =>
                    (
                        <ClickNextImageDiv  rigth={true}>

                            <ClickNextImage onClick={clickHandler} size="32" color="white"/>
                        </ClickNextImageDiv>

                    )
                }
                renderIndicator={(   clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
                    isSelected: boolean,
                    index: number,
                    label: string) =>
                    (               
                        <CarrouselBall onClick={clickHandler} active={isSelected}/>

                    )
                }
            >
                <ImageContent>
                    <Image layout="fill" src={'/temporary/itensLarge.jpg'}/>
                </ImageContent>
                <ImageContent>
                    <Image layout="fill" src={'/temporary/itensLarge.jpg'}/>
                </ImageContent>
                <ImageContent>
                    <Image layout="fill" src={'/temporary/itensLarge.jpg'}/>
                </ImageContent>
            </Carousel>
        </div>
    )
}

export default HomeCarrousel