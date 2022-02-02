import styled from 'styled-components';
import { theme } from '../../theme';

export const Nav = styled.nav`
    width: 100vw;
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
            &:hover{
                color: ${ theme.Yellow300 }
            }
        }
    }
    img{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`;