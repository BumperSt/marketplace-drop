import { useEffect, useState } from "react"
import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue:Number,
    size?:number
}


export const AvaliationStarts = ({avaliationValue,size} : Props) => {

    const stars = [0, 1, 2, 3, 4]

    if(!size){
        size = 15
    }



    return(
        <AlignRow>
            {
                stars.map((star) => (
                    <Star key={star} size={size} disabled={(star+1) <= avaliationValue}/>
                ))
            }
            {
                size == 15 ?
                <AvaliationValue>{avaliationValue}</AvaliationValue>
                :
                size == 30 && 
                <AvaliationValue>{avaliationValue}</AvaliationValue>
            }
        </AlignRow>
    )
}