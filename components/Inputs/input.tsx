import { InputContainer, InputStyled, InputTitle, TextAreaStyled } from "./inputsStyles"


interface Props {
    Title?: string,
    Style?: any,
    StyleInput?:any,
    fontColor?: string,
    value: string,
    setValue: any,
    textArea?:boolean,
    placeholder?:string,
}

export const Input = ({Title, Style, value, setValue, StyleInput, fontColor, textArea, placeholder}: Props) => {
    return(
        <InputContainer style={Style} fontColor={fontColor}>
            {
                Title &&
                <InputTitle>{Title}</InputTitle>

            }
            {
                textArea ?
                    <TextAreaStyled placeholder={placeholder} style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>

                :
                    <InputStyled  style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>
            }
            
        </InputContainer>
    )
}