import { useEffect, useState } from "react"
import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue:Number,
    size?:number
}


export const AvaliationStarts = ({avaliationValue,size} : Props) => {

    const stars = [0, 1, 2, 3, 4]
    const [sizeHere, setSize] = useState(size)

    useEffect(() => {
        if(!sizeHere){
            setSize(15)
        }
    }, [])

    return(
        <AlignRow>
            {
                stars.map((star) => (
                    <Star key={star} size={sizeHere} disabled={(star+1) <= avaliationValue}/>
                ))
            }
            {
                !sizeHere &&
                <AvaliationValue>{avaliationValue}</AvaliationValue>

            }
        </AlignRow>
    )
}