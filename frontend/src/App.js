import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { SignUp } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>} />
    </Routes>    
  );
}

export default App;
