import { InputContainer, InputTitle, SelectStyled } from "./inputsStyles"


interface Props {
    Title: string,
    value: string,
    setValue: any,
    fontColor?: string,
    options: Array<string>,
}

export const SelectStyledComponent = ({Title, value, setValue, options, fontColor}: Props) => {
    return(
        <InputContainer fontColor={fontColor}>
            <InputTitle>{Title}</InputTitle>
            <SelectStyled value={value} onChange={(e) => setValue(e.target.value)}  >
                <option value="" disabled selected></option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </SelectStyled>
        </InputContainer>
    )
}