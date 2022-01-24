import { AvalaitonMedalDiv, AvalaitonMedals, AvalaitonMedalTitle, AvaliationContainer, MedalIcon,AvaliationSub, ColorDiv, ColorsDiv, TriangleIcon, AlignAvaliationLine, LineStyled } from "./sellerAvalaitonStyle"

export const SellerAvalaiton = () => {
    return(
        <>
          <AvaliationContainer>
            <ColorsDiv>
                <ColorDiv color="#EA0000"/>
                <ColorDiv color="#EA7000"/>
                <ColorDiv color="#EAD200"/>
                <ColorDiv color="#00939C"/>
                <ColorDiv color="#17A500"/>

            </ColorsDiv>
            <AlignAvaliationLine>
                <LineStyled/>
                <TriangleIcon size="16"/>
            </AlignAvaliationLine>
        </AvaliationContainer>       
        <AvaliationSub color="#17A500">Aliquam ac lectus id mi porttitor aliquet sed sed ligula.</AvaliationSub>
        <AvalaitonMedals>
            <AvalaitonMedalDiv>
                <MedalIcon size='30'/>
                <AvalaitonMedalTitle>donec sollicitudin luctus faucibus.</AvalaitonMedalTitle>
            </AvalaitonMedalDiv>
            <AvalaitonMedalDiv>
                <MedalIcon size='30'/>
                <AvalaitonMedalTitle>donec sollicitudin luctus faucibus.</AvalaitonMedalTitle>
            </AvalaitonMedalDiv>
            <AvalaitonMedalDiv>
                <MedalIcon size='30'/>
                <AvalaitonMedalTitle>donec sollicitudin luctus faucibus.</AvalaitonMedalTitle>
            </AvalaitonMedalDiv>
        </AvalaitonMedals>
        </>
      
    )
}