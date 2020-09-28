import styled from 'styled-components';
//import logo from '../../assets/cloudbox_logo.png'
import cloud from '../../assets/cloud.svg'
import logo from '../../assets/cloudbox_logo.png'

const LogoBox = styled.img.attrs({src:cloud,alt:"Cloudbox'Logo"})`
    background-color: var(--base-color);
    background-image: url('${logo}');
    background-repeat: no-repeat;
    background-size: 89px;
    background-position: 50% 60%;
    height:8rem;
    width: 8.4rem;
    border-radius: 50%;
    @media (max-height: 420px){
        &{
            height:90%;
            background-size: 40%; 
        }
    }
`;

export default LogoBox