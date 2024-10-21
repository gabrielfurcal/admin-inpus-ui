import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import {Trains, CreateTrain, EditTrain } from './pages/Trains';
import { Cities } from './pages/Cities';
import Home from './pages/Home';
import Menu from './components/Menu';
import { Collapse, initTWE } from "tw-elements";
import { PageLayout } from './layouts/PageLayout';
import { PageTitleContext } from './contexts/PageTitleContext';
import { CreateCity } from './pages/Cities/CreateCity';
import { EditCity } from './pages/Cities/EditCity';

const App: React.FC = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <main>
      <header>
        <Menu></Menu>
      </header>
      <PageTitleContext>
        <PageLayout>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/trains" element={<Outlet/>}>
                <Route index element={<Trains/>}/>
                <Route path="create" element={<CreateTrain/>}/>
                <Route path="edit/:id" element={<EditTrain/>}/>
              </Route>
              <Route path="/cities" element={<Outlet/>}>
                <Route index element={<Cities/>}/>
                <Route path="create" element={<CreateCity/>}/>
                <Route path="edit/:id" element={<EditCity/>}/>
              </Route>
            </Routes>
        </PageLayout>
      </PageTitleContext>
    </main>
  );
}

export default App;
