import { FaBox } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

import styled from "styled-components";

export const AvaliationContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding-block:.5rem;
    margin-block:.5rem;
    justify-content: center;
    
`

export const AlignAvaliationLine = styled.div`  
    margin-top: .5rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    position: relative;

`
export const LineStyled = styled.hr`
    width: 90%;
    margin-inline:.5rem;
    text-align:left;
    background-color:black;
    height:.1rem;
    margin-block:.3rem;
    color:#959595;
`

export const ColorsDiv = styled.div`
    min-width:80vw;
    height:.5rem;
    display:flex;
    flex-direction: row;
`

export const ColorDiv = styled.div<{color: string}>`
    width:20%;
    background-color:${({color}) => color};
`

export const AvaliationSub = styled.h1<{color: string}>`
    color:${({color}) => color};
    font-size: 12px;
    text-align:center;
    width: 80%;
`

export const AvalaitonMedals = styled.div`
    display:flex;
    flex-direction: row;
    width: 90%;
    margin-top:1rem;
    justify-content: center;

`
export const AvalaitonMedalDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    text-align:center;
    
`

export const AvalaitonMedalTitle = styled.h1`
    flex-direction: column;
    font-weight: 300;
    margin-top:.3rem;
    font-size: 10px;
`

export const TriangleIcon = styled(IoTriangle)`
    margin-left: .5rem;
`

export const MedalIcon = styled(FaBox)`

`