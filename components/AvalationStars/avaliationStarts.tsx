import { useEffect, useState } from "react"
import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue:Number,
    size?:string|number,
    seeValue?:boolean
}


export const AvaliationStarts = ({avaliationValue,size, seeValue} : Props) => {

    const stars = [0, 1, 2, 3, 4]





    return(
        <AlignRow>
            {
                stars.map((star) => (
                    <Star key={star} size={size} disabled={(star+1) <= avaliationValue}/>
                ))
            }
            {
                seeValue &&
                <AvaliationValue>{avaliationValue}</AvaliationValue>
            }
            
        </AlignRow>
    )
}