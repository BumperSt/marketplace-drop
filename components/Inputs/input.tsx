import { InputContainer, InputStyled, InputTitle } from "./inputsStyles"


interface Props {
    Title: string;
    Style?: any;
    value: string;
    setValue: any;
}

export const Input = ({Title, Style, value, setValue}: Props) => {
    return(
        <InputContainer style={Style}>
            <InputTitle>{Title}</InputTitle>
            <InputStyled value={value} onChange={(e) => setValue(e.target.value)}  ></InputStyled>
        </InputContainer>
    )
}