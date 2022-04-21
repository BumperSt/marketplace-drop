import useWindowDimensions from "helpers/screenSize"
import { useEffect, useState } from "react"
import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue?:number,
    size?:number,
    seeValue?:boolean,
    getStarSelected?:any,
}


export const AvaliationStarts = ({avaliationValue,size, seeValue, getStarSelected} : Props) => {

    const stars = [1, 2, 3, 4, 5]
    const { height, width } = useWindowDimensions();
    const [starSize, setStarSize] = useState(size)
    useEffect(() => {

        if(width > 768){
            console.log(width)
            setStarSize(size * 1.5)
        }
    },[])
    
    return(
        <AlignRow>
            {
                stars.map((star) => (
                    <Star onClick={() =>  star == avaliationValue ? getStarSelected(0) : getStarSelected(star)} key={star} size={starSize} disabled={getStarSelected ? (star) <= avaliationValue : (star) <= avaliationValue}/>
                ))
            }
            {
                seeValue &&
                <AvaliationValue>{avaliationValue}</AvaliationValue>
            }
            
        </AlignRow>
    )
}