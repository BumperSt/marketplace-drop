import { InputContainer, InputStyled, InputTitle, TextAreaStyled } from "./inputsStyles"


interface Props {
    Title?: string,
    Style?: any,
    StyleInput?:any,
    fontColor?: string,
    value: string,
    setValue: any,
    inputType?:'text' | 'textarea' | 'password',
    placeholder?:string,
}

export const Input = ({Title, Style, value, setValue, StyleInput, fontColor, inputType, placeholder}: Props) => {
    return(
        <InputContainer style={Style} fontColor={fontColor}>
            {
                Title &&
                <InputTitle>{Title}</InputTitle>

            }
            {
                inputType== 'textarea' ?
                    <TextAreaStyled placeholder={placeholder} style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>
            
                : inputType == 'password' ?
                    <InputStyled placeholder={placeholder}  type={inputType} style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>
                :
                    <InputStyled placeholder={placeholder} style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}/>

            }
            
        </InputContainer>
    )
}