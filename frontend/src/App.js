import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { SignUp, SignIn, Error } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='*' element={<Error/>} />
    </Routes>    
  );
}

export default App;
