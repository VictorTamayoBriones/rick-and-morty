import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
    width: 95%;
    display: ${ props => props.flex ? 'flex' : 'block' };
    border: solid 1px ${ theme.Green700 };
    border-radius: 5px;
    overflow: hidden;
    transition: ease all .3s;
    cursor: pointer;
    &:hover{
        transform: translate3D(3px, -3px, 0px);
        box-shadow: 0px 0px 9px ${ theme.Green200 };
    }

    @media (max-width: 1000px){
        width: max-content;
        display: block !important;
        img{
            width: 100%;
        }
    }
`;

export const CardBody = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;