import styled from 'styled-components';
import key from '../../assets/key.svg';
import user from '../../assets/user.svg';
import BoxButton from '../BoxButton';

const LoginBox = styled.section`
    background-color: var(--base-color);
    height: 65vh;
    width: 100vw;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &>label{
        position: relative;
    }
    &>.email{
        display:none;
    }
    &>${BoxButton}{

    }
    &>.name::after{
        content: url(${user});
        position: absolute;
        right:0;
        bottom: 0;
        width: 1.8rem;  
    }
    &>.password::after{
        content: url(${key});
        position: absolute;
        right:0;
        bottom: 0;
        width: 1.8rem;    
    }    
`;

export default LoginBox