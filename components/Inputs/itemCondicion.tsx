import { InputContainer, ConditionDiv, InputTitle,LessIcon, PlusIcon } from "./inputsStyles"


interface Props {
    Title: string,
    Style?: any,
    StyleInput?:any,
    fontColor?: string,
    value: number,
    setValue: any,
}

export const SelectItemCondition = ({Title, Style, value, setValue, StyleInput, fontColor}: Props) => {




    return(
        <InputContainer style={Style} fontColor={fontColor}>
            <InputTitle>{Title}</InputTitle>
            <ConditionDiv>
                <LessIcon onClick={() => setValue(-0.5)}/>
                <h1>{value}</h1>
                <PlusIcon onClick={() => setValue(0.5)}/>
            </ConditionDiv>
            
        </InputContainer>
    )
}