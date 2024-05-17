import './App.css';
import Menu from './Component/Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
<<<<<<< branch3
import Make from './Page/Make';
=======
import Makemain from './Page/make/Makemain';
import Makecheck from './Page/check/Makecheck';
>>>>>>> local
import Notfound from './Page/Notfound';
// import List from './Page/List';
import LoginForm from './Page/Login';
import Accountdata from './asset/accountdata';
import Imagedata from './asset/imagedata';
import Listdata from './asset/listdata';
import Dayform from './Component/Header/Dday/dday';
import Setday from './Component/Header/Dday/setday';
import Showday from './Component/Header/Dday/showday';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/setday" element={<Setday/>}/>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
<<<<<<< branch3
          <Route path="/make" element={<Make />} />
          <Route path="/list" element={<List />} />
=======
          <Route path="/make" element={<Makemain />} />
          {/* <Route path="/list" element={<List />} /> */}
>>>>>>> local
          <Route path="/accountdata" element={<Accountdata />} />
          <Route path="/imagedata" element={<Imagedata />} />
          <Route path="/make/listdata" element={<Listdata />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
