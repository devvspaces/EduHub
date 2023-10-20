import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { SignUp, SignIn } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>} />
    </Routes>    
  );
}

export default App;
