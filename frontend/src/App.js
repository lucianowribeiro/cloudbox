import React from 'react';
// eslint-disable-next-line
import reset from './settings/reset.css'
// eslint-disable-next-line
import colors from './settings/colors.css'
import LoginBox from './components/LoginBox';
import LogoBox from './components/LogoBox';
import RegisterBox from './components/RegisterBox';

function App() {
  return (
    <>
      <LoginBox>
        <LogoBox />
      </LoginBox>
      <RegisterBox>
        <LogoBox />
      </RegisterBox>
    </>
  );
}

export default App;
 