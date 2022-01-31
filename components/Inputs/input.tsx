import { InputContainer, InputStyled, InputTitle } from "./inputsStyles"


interface Props {
    Title: string,
    Style?: any,
    StyleInput?:any,
    value: string,
    setValue: any,
    type?:string,
    createAccont?:boolean,
}

export const Input = ({Title, Style, value, setValue, StyleInput, type,createAccont}: Props) => {
    return(
        <InputContainer createAccont={createAccont} inputType={type} style={Style}>
            <InputTitle>{Title}</InputTitle>
            <InputStyled style={StyleInput} value={value} onChange={(e) => setValue(e.target.value)}  ></InputStyled>
        </InputContainer>
    )
}