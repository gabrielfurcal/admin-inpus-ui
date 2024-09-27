import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Trains from './pages/Trains/Trains';
import Home from './pages/Home';
import Menu from './components/Menu';
import EditTrain from './pages/Trains/EditTrain';

function App() {
  return (
    <main>
      <header>
        <Menu></Menu>
      </header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/trains" element={<><h2>Trains</h2><Outlet/></>}>
            <Route index element={<Trains/>}/>
            <Route path="edit/:id" element={<EditTrain/>}/>
          </Route>
        </Routes> 
    </main>
  );
}

export default App;
