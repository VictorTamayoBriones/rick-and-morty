import styled from 'styled-components';

export const MainTitle = styled.h1`
    width: 50%;
    font-size: 150px;
    letter-spacing: 5px;
    line-height: 150px;
    word-spacing: 30px;
    display: inline-block;
    transform: translateX(50px);
    background: -webkit-linear-gradient(45deg, #50ad04 25%, #fffb02 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1000px){
        font-size: 100px;
        word-spacing: 15px;
        line-height: 100px;
        width: 70%;
    }

    @media (max-width: 650px){
        width: 90%;
        transform: translateX(0px);
    }

    @media (max-width: 450px){
        font-size: 75px;
    }
`;