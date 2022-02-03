import styled from 'styled-components';
import { theme } from '../../theme';

export const Nav = styled.nav`
    width: 100vw;
    height: 60px;
    max-height: 60px;
    background: ${ theme.Gray2 };
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        inline-size: 100%;
        list-style: none;
        justify-content: flex-end;
        display: flex;
        gap: 20px;
        a{
            text-decoration: none;
            font-size: 18px;
            &:hover{
                color: ${ theme.Yellow300 }
            }
        }
    }
    img{
        width: 45px;
        height: 45px;
        cursor: pointer;
        border: solid 2px transparent;
        border-radius: 50%;
        &:hover{
            border: solid 2px ${ theme.Green700 };
        }
    }

    @media (max-width: 450px){
        img{
            display: none;
        }
        ul{
            justify-content: center;
        }
    }
`;