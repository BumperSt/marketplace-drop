import { AlignRow, AvaliationValue, Star } from "./avaliationStartsStyle"

interface Props{
    avaliationValue:Number
}


export const AvaliationStarts = ({avaliationValue}) => {
    return(
        <AlignRow>
            <Star size="15"/>
            <Star size="15"/>
            <Star size="15"/>
            <Star size="15"/>
            <Star size="15"/>
            <AvaliationValue>{avaliationValue}</AvaliationValue>
        </AlignRow>
    )
}