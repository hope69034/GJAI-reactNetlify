import './App.css';
import Door from './compo/01.Door';
import Home from './compo/02.Home';
import { Route, Routes } from 'react-router-dom';
//Routes 여러개의페이지(컴포넌트)에대한 정보를 가지고 잇는 태그
//Route 페이지(컴포넌트)에경로(주소)를 부여해 줄 수 잇는 역할
import Resume from './compo/03.Resume';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Door></Door>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Resume' element={<Resume></Resume>}></Route>
      </Routes>

    </>
  );
}

export default App;