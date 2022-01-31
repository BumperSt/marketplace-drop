import { AiTwotoneStar } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { MdReportProblem } from "react-icons/md";
import styled from "styled-components";

export const ProductImagensDiv = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    padding-inline: 1rem;
`

export const ListImage = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 1rem;
    justify-content: center;
`

export const AlignColumn = styled.div`
    display:flex;
    flex-direction:column;
    text-align: start;
    align-items: start;
    width:100%;
    padding-inline: 1rem;
    
`

export const ImageDiv = styled.div`
    display: flex;
    span{border-radius: 10px;}
    margin-bottom: .5rem;
    margin-top: .5rem;

`

export const AlignRow = styled.div`
    display:flex;
    
    flex-direction:row;
    margin-top: .5rem;
    align-items:center;

`

export const SmallImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-block: .2rem;
`

export const ProductTitle = styled.h1`
    font-size: 18px;
    font-weight: 700;
    max-width: 90%;
`

export const ShareIcon = styled(FiShare2)`
    color:${({ theme }) => theme.colors.detalhes};
    z-index: 50;

`

export const ProductSubTitle = styled.h1`
    font-size: 12px;
    font-weight: 400;
`

export const ProductSize = styled.button`
    background-color:black;
    font-size: 12px;
    padding-inline:.3rem;
    padding-block:.2rem;
    margin-right:.1rem;
`

export const ProductPrice = styled.h1`
    font-size: 36px;
    margin-top: .5rem;
`

export const BuyButton = styled.button`
    border-radius: 10px;
    padding-inline: 2rem;
    padding-block: .3rem;
    margin-top:.5rem;
    align-self: center;
`

export const ProductDescreptionDiv = styled.div`
    padding:.5rem;
    margin-top: 1rem;
    background-color:${({ theme }) => theme.colors.productPrice.descreptionDiv};
    display:flex;
    flex-direction: column;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    text-align: start;
`

export const DescreptionTitle = styled.h1`
    font-weight: 700;
    font-size: 14px;
    margin-bottom:.5rem;
`


export const CommentsTitle = styled.div`
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    text-align: start;
    margin-top: 1rem;
`

export const CommentsDiv = styled(ProductDescreptionDiv)`
    overflow-y: unset;
`

export const CommentTextArea = styled.textarea`

`


export const DescreptionText = styled(DescreptionTitle)`
    font-weight: 400;
`

export const Title = styled.h1`
    font-size: 14px;
    font-weight: 700;
    text-align: start;
    margin-top:.5rem;

`

export const QuestionInput = styled.input`
    border-radius: 15px;
    border:3px solid ${({ theme }) => theme.colors.stroke};
    font-size: 12px;
    padding:.2rem;
`

export const QuestionAligRow = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: .5rem;
`

export const QuestionButton = styled.button`
    width:25%;
    margin-left:.25rem;
    font-size: 12px;
    font-weight: 600;
    border-radius: 15px;
`

export const QuestionDiv = styled(ProductDescreptionDiv)`
    background-color:white;
    border:3px solid ${({ theme }) => theme.colors.stroke};
    box-shadow:none;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    overflow-y: auto;
    max-height:20vh;
`

export const QuestionCommentDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: .5rem;
`

export const QuestionText = styled.h1`
    font-size: 10px;
    font-weight:400;
`

export const QuestionResponseText = styled.h1`
    font-size: 9px;
    font-weight:400;
    border-left: 1px solid black;
    padding-left:.3rem;
    margin-left:.2rem;
    color:${({ theme }) => theme.colors.texts.detalhes};
    margin-top:.1rem;
`

export const YouAvaliationDiv = styled.div`
    display:flex;
    flex-direction: row;
    border:3px solid ${({ theme }) => theme.colors.stroke};
    background-color:white;
    border-radius: 15px;
    width: 60%;
    padding: .2rem;
    align-items: center;
    justify-content: center;
`

export const AvaliationTextArea = styled.textarea`
    font-size:10px;
    padding-inline:.5rem;
    padding-block:.25rem;
    border:3px solid ${({ theme }) => theme.colors.stroke};
    border-radius:15px;
    min-height:3rem;
    margin-top:.5rem;
`


export const AlignAvaliationRow = styled.div`
    margin-top: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ToReportDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-block:1rem;
`

export const ToReportIcon = styled(MdReportProblem)`

`

export const ToReportText = styled.h1`
    font-size:12px;
`
