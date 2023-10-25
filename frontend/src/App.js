import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { SignUp, SignIn, Error, ForgotPassword, ResetPassword } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
      <Route path='*' element={<Error/>} />
    </Routes>    
  );
}

export default App;
