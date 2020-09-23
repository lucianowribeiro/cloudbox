import styled from 'styled-components';

const BoxButton = styled.button`
    border: none;
    border-radius: 10px;
    height: 3rem;
    width: 18rem;
    transition: transform 800ms;
    &:active{
        transform: scale(0.9);
        transition: transform 800ms;
    }  

`;

export default BoxButton;