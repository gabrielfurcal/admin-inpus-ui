import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Trains from './pages/Trains/Trains';
import Home from './pages/Home';
import Menu from './components/Menu';
import EditTrain from './pages/Trains/EditTrain';
import CreateTrain from './pages/Trains/CreateTrain';
import { Collapse, initTWE } from "tw-elements";

function App() {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <main>
      <header>
        <Menu></Menu>
      </header>
      <section className='w-4/5 mx-auto'>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/trains" element={<Outlet/>}>
              <Route index element={<Trains/>}/>
              <Route path="create" element={<CreateTrain/>}/>
              <Route path="edit/:id" element={<EditTrain/>}/>
            </Route>
          </Routes>
      </section> 
    </main>
  );
}

export default App;
