import styled from 'styled-components';
import BoxButton from '../BoxButton';

const RegisterBox = styled.footer`
    background-color: var(--base-color); 
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* &>${BoxButton}{
        margin-bottom: 2px;
    } */
    &>.signin{
        background-color: var(--contrast-color);
        color: var(--base-color);
    }
    &>.signup{
        background-color: var(--base-color);
        color: var(--contrast-color);
    }
    &>.signup:hover{
        border: 2px solid var(--contrast-color);
    }  
    
`;

export default RegisterBox