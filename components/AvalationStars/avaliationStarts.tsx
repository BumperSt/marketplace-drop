import { useEffect, useState } from "react"
import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue:number,
    size?:string|number,
    seeValue?:boolean,
    getStarSelected?:any,
}


export const AvaliationStarts = ({avaliationValue,size, seeValue, getStarSelected} : Props) => {

    const stars = [1, 2, 3, 4, 5]

    const [avalationValueHere, setAvaliationValueHere] = useState(0)

    useEffect(() => {
        setAvaliationValueHere(avaliationValue)
    }, [getStarSelected])




    return(
        <AlignRow>
            {
                stars.map((star) => (
                    <Star onClick={() =>  avalationValueHere == 1 && star == 1 ? setAvaliationValueHere(0) : setAvaliationValueHere(star)} key={star} size={size} disabled={getStarSelected ? (star) <= avalationValueHere : (star) <= avaliationValue}/>
                ))
            }
            {
                seeValue &&
                <AvaliationValue>{avaliationValue}</AvaliationValue>
            }
            
        </AlignRow>
    )
}