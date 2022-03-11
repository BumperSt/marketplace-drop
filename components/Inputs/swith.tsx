import { SwitchBall, ToglleThemeDiv } from "./inputsStyles"

interface props {
    onClick:any, 
    checked:any,
    styleDiv?:any,
    styleBall?:any

}
export const Switch = ({onClick, checked, styleDiv, styleBall} : props) => {
    return(
        <ToglleThemeDiv style={styleDiv}  onClick={(e) => onClick(e)}>
            <SwitchBall style={styleBall} checked={checked}/>
            {/* <Switch height={0} onColor={theme.colors.bottomBarBackgroud} offColor={theme.colors.bottomBarBackgroud}  uncheckedIcon={false} checkedIcon={false}  onChange={(e) => DefTheme(e)} checked={changeTheme} />    */}
        </ToglleThemeDiv>
    )
}