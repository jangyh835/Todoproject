import './App.css';
import Menu from './Component/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import Make from './Page/Make';
import Notfound from './Page/Notfound';
import List from './Page/List';
import LoginForm from './Page/Login';
import Accountdata from './asset/accountdata';
import Imagedata from './asset/imagedata';
import Listdata from './asset/listdata';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/make" element={<Make />} />
          <Route path="/list" element={<List />} />
          <Route path="/accountdata" element={<Accountdata />} />
          <Route path="/imagedata" element={<Imagedata />} />
          <Route path="/listdata" element={<Listdata />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
