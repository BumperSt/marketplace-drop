import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, CommentsDiv, DescreptionText, DescreptionTitle, ProductDescreptionDiv, ProductPrice, ProductSize, ProductSubTitle, ProductTitle, QuestionAligRow, QuestionButton, QuestionDiv, QuestionInput, Title, ShareIcon, QuestionText, QuestionResponseText, QuestionCommentDiv, AvaliationTextArea, YouAvaliationDiv, AlignAvaliationRow, ToReportDiv, ToReportIcon, ToReportText, AlignCollum, AlignCollumReverseDesktop, AlingRowInDesktop } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"
import ShowAdvertImagens from "../ShowAdvertImagens/showAdvertImagens"
import { useState } from "react"


interface Props {
    setModalState:any
}


export const ModalOffer = ({setModalState}: Props) => {

    const [starValue, setStarValue] = useState(0)
    
    return(
        <Modal setModalState={setModalState}>
            <AlingRowInDesktop>
                <ShowAdvertImagens/>
                <AlignColumn>
                    <AlignCollumReverseDesktop>
                        <AvaliationStarts size={'.5rem'} seeValue={true} avaliationValue={4.7}/>
                        <AlignCollum>
                            <AlignRow>
                                <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                                <ShareIcon/>
                            </AlignRow>
                            <ProductSubTitle>Aliquam at rhoncus diam</ProductSubTitle>
                        </AlignCollum>
                    </AlignCollumReverseDesktop>

                    <AlignRow>
                        <ProductSize>38</ProductSize>
                        <ProductSize>40</ProductSize>
                        <ProductSize>42</ProductSize>
                        <ProductSize>44</ProductSize>
                    </AlignRow>
                    <ProductPrice>R$ 1299,99</ProductPrice>
                    <BuyButton>Comprar</BuyButton>

                </AlignColumn>
            </AlingRowInDesktop>
            <ProductDescreptionDiv>
                <DescreptionTitle>LOREM IPSUM</DescreptionTitle>
                <DescreptionText>Interdum et malesuada fames ac 
                ante ipsum primis in faucibus. 
                Phasellus vestibulum ligula nec aliquam lacinia. 
                Aliquam in laoreet diam. 
                Donec ligula quam, accumsan a cursus eu, 
                ullamcorper eu lorem.</DescreptionText>
            </ProductDescreptionDiv>

            <CommentsDiv>
                <Title>Faça uma pergunta</Title>
                <QuestionAligRow>
                    <QuestionInput style={{
                        width:'100%'
                    }}/>
                    <QuestionButton>Postar</QuestionButton>

                </QuestionAligRow>
                <QuestionDiv>
                    <QuestionCommentDiv>
                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598</QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>
                    <QuestionCommentDiv>
                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598</QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>
                    <QuestionCommentDiv>
                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598</QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>
                    <QuestionCommentDiv>
                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598</QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>
                    <QuestionCommentDiv>
                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598</QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>
                </QuestionDiv>
            </CommentsDiv>

            <CommentsDiv>
                <Title>Avaliações</Title>
                <QuestionDiv>
                    <QuestionCommentDiv>

                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598 <AvaliationStarts avaliationValue={3} size='.3rem'/></QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>


                </QuestionDiv>
                <Title>Avalie o produto</Title>
                <AvaliationTextArea placeholder="escreva um review..."/>
                <AlignAvaliationRow>
                    <YouAvaliationDiv>
                        <QuestionText style={{
                            marginRight:'.2rem'
                        }}>Sua avaliação</QuestionText>
                        <AvaliationStarts getStarSelected={setStarValue} avaliationValue={starValue} size={'.5rem'}/>

                    </YouAvaliationDiv>

                    <QuestionButton>Postar</QuestionButton>

                </AlignAvaliationRow>
               
            </CommentsDiv>
            <ToReportDiv>
                <ToReportIcon/>
                <ToReportText>Reportar anúncio</ToReportText>
            </ToReportDiv>
        </Modal>

    )
}