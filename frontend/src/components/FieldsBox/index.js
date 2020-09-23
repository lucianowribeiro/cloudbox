import styled from 'styled-components';

const FieldsBox = styled.input`
    background-color: var(--base-color);
    color: #858688;
    font-size: 1rem;
    border:none;
    border-radius: 10px;
    border-bottom: 1px solid var(--contrast-color);
    height: 2rem;
    width: 16rem;
    margin-top: 1rem;
    &::placeholder{
        font-size:1rem;
    }
`;

export default FieldsBox