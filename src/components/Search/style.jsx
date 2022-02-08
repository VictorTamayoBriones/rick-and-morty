import styled from 'styled-components';
import { theme } from '../../theme'

export const SearchBar = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    border-bottom: solid 1px ${ theme.Green700 };
    padding: 0px 0px 3px 0px;
    gap: 8px;
    img{
        width: 28px;
    }
    input{
        width: 100%;
        border: none;
        background: transparent;
        outline: none;
        font-size: 22px;
        letter-spacing: 1px;
    }
`;