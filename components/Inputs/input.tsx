import { InputContainer, InputStyled, InputTitle } from "./inputsStyles"


interface Props {
    Title: string,
    Style?: any,
    StyleInput?:any,
    value: string,
    setValue: any,
}

export const Input = ({Title, Style, value, setValue, StyleInput}: Props) => {
    return(
        <InputContainer style={Style}>
            <InputTitle>{Title}</InputTitle>
            <InputStyled style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}  ></InputStyled>
        </InputContainer>
    )
}