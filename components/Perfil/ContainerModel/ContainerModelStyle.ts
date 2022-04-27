import styled from "styled-components"

export const Container = styled.div<{editOn:boolean}>`
    overflow-y: auto;
    display: flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (min-width: 768px){
        position: relative;
        width: 100%;
        height: auto;
        margin:0rem;
        align-items: flex-start;

        ${({editOn}) => editOn && `
            flex-direction: row;
        `}
    }
`

export const InternalContainer = styled.div<{pageName?: 'adverts' | 'andress'}>`
    padding-inline:.8rem;
    padding-block:.5rem;
    margin-top: .5rem;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
    justify-content: center;
    @media (min-width: 768px){
        box-shadow:none;
        border:solid 1px ${({theme}) => theme.colors.stroke};
        margin:0px;
        width: 90%;
        padding-block:.2rem;
        ${({pageName}) => pageName === 'adverts' &&`        
            border-radius: 0px;
            border-top: 0px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        `
        };
        ${({pageName}) => pageName === 'andress' &&`        
            border-radius: 0px;
            border: 0px;
            
            width: 50%;
        `
        };

    }
`