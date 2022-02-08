import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 40%;
        opacity: 1;
    }

    @media (max-width: 650px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const CharactersContainer = styled.div`
    width: 100%;
    padding: 40px 10px;
    gap: 40px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;