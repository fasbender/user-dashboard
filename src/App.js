import Homepage from './pages/Homepage';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App p-2 max-w-primaryWidth m-auto font-inter">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={
          <>
            <Header/>
            <Login/>
          </>
        } 
        />
        <Route path='/register' element={
          <>
            <Header/>
            <Register/>
          </>
        } 
        />
      </Routes>
    </div>
  );
}

export default App;
