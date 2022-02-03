import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 50%;
        opacity: .8;
    }

    @media (max-width: 650px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;