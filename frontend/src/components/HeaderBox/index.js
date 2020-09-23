import styled from 'styled-components';

const HeaderBox = styled.header`
    background-color: var(--base-color);
    text-align: center; 
    height: 15%;
    @media (max-height: 420px){
        &{
            height: 25%;  
        }
    }
`;

export default HeaderBox