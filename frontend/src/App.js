import React from 'react';
// eslint-disable-next-line
import reset from './settings/reset.css'
// eslint-disable-next-line
import colors from './settings/colors.css'
import LoginBox from './components/LoginBox';
import LogoBox from './components/LogoBox';
import BoxButton from './components/BoxButton';
import RegisterBox from './components/RegisterBox';
import FieldsBox from './components/FieldsBox';
import HeaderBox from './components/HeaderBox';

function App() {
  return (
    <div>
      <HeaderBox>
        <LogoBox />
      </HeaderBox>  
      <LoginBox>
          <label className="name">
            <FieldsBox type="text" placeholder="Name" required autocomplete="on"/>
          </label>
          <label className="email">
            <FieldsBox type="email" placeholder="Email" required autocomplete="on"/>   
          </label>
          <label className="password">
            <FieldsBox type="password" maxlength="8" placeholder="Password" required autocomplete="on"/>   
          </label> 
      </LoginBox>
      <RegisterBox>
        <BoxButton className="signin">SIGN IN</BoxButton>
        <BoxButton className="signup" >SIGN UP</BoxButton>  
      </RegisterBox>
    </div>
  ); 
}

export default App;
 