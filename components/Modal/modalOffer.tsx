import {Modal} from "./modal"
import { AlignColumn, AlignRow, BuyButton, CommentsDiv, DescreptionText, DescreptionTitle, ImageDiv, ListImage, ProductDescreptionDiv, ProductImagensDiv, ProductPrice, ProductSize, ProductSubTitle, ProductTitle, QuestionAligRow, QuestionButton, QuestionDiv, QuestionInput, Title, ShareIcon, SmallImageDiv, QuestionText, QuestionResponseText, QuestionCommentDiv, AvaliationTextArea, YouAvaliationDiv, AlignAvaliationRow } from "./modalOfferStyles"
import Image from "next/image"
import { AvaliationStarts } from "../AvalationStars/avaliationStarts"


interface Props {
    setModalState:any
}


export const ModalOffer = ({setModalState}: Props) => {


    
    return(
        <Modal setModalState={setModalState}>
            <ProductImagensDiv>
                    <ImageDiv>
                        <Image width="200" height="180" src="/temporary/productImage.png"/>
                    </ImageDiv>
                    <ListImage>
                        <SmallImageDiv>                        
                            <Image width="50" height="40" src="/temporary/productImage.png"/>
                        </SmallImageDiv>
                        <SmallImageDiv>                        
                            <Image width="50" height="48" src="/temporary/productImage.png"/>
                        </SmallImageDiv>                        <SmallImageDiv>                        
                            <Image width="50" height="48" src="/temporary/productImage.png"/>
                        </SmallImageDiv>
                    </ListImage>
            </ProductImagensDiv>
            <AlignColumn>
                <AvaliationStarts avaliationValue={4.7}/>
                <AlignRow>
                    <ProductTitle>MIKE LAIR 2 RED HOT SPECIAL EDITION</ProductTitle>
                    <ShareIcon/>
                </AlignRow>
                <ProductSubTitle>Aliquam at rhoncus diam</ProductSubTitle>
                <AlignRow>
                    <ProductSize>38</ProductSize>
                    <ProductSize>40</ProductSize>
                    <ProductSize>42</ProductSize>
                    <ProductSize>44</ProductSize>
                </AlignRow>
                <ProductPrice>R$ 1299,99</ProductPrice>
                <BuyButton>Comprar</BuyButton>

            </AlignColumn>
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

                        <QuestionText>Sed orci massa, facilisis lacinia massa quis, laoreet sodales metus. RJOAO6598 <AvaliationStarts avaliationValue={3} size={10}/></QuestionText>
                        <QuestionResponseText>Donec gravida luctus accumsan. Fusce pharetra posuere iaculis. Nam sodales purus nibh, sit amet pharetra massa pulvinar non.</QuestionResponseText>
                    </QuestionCommentDiv>


                </QuestionDiv>
                <Title>Avalie o produto</Title>
                <AvaliationTextArea placeholder="escreva um comentario"/>
                <AlignAvaliationRow>
                    <YouAvaliationDiv>
                        <QuestionText style={{
                            marginRight:'.2rem'
                        }}>Sua avaliação</QuestionText>
                        <AvaliationStarts avaliationValue={0} size={10}/>

                    </YouAvaliationDiv>

                    <QuestionButton>Postar</QuestionButton>

                </AlignAvaliationRow>
               
            </CommentsDiv>
            
        </Modal>

    )
}