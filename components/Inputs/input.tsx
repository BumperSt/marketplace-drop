import { InputContainer, InputStyled, InputTitle, TextAreaStyled } from "./inputsStyles"


interface Props {
    Title: string,
    Style?: any,
    StyleInput?:any,
    fontColor?: string,
    value: string,
    setValue: any,
    textArea?:boolean,
}

export const Input = ({Title, Style, value, setValue, StyleInput, fontColor, textArea}: Props) => {
    return(
        <InputContainer style={Style} fontColor={fontColor}>
            <InputTitle>{Title}</InputTitle>
            {
                textArea ?
                    <TextAreaStyled  style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>

                :
                    <InputStyled  style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>
            }
            
        </InputContainer>
    )
}