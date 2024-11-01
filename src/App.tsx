import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import { Collapse, initTWE } from "tw-elements";
import { PageLayout } from './layouts/PageLayout';
import { PageTitleContext } from './contexts/PageTitleContext';
import {Trains, CreateTrain, EditTrain } from './pages/Trains';
import {Cities, CreateCity, EditCity } from './pages/Cities';
import { Employees, CreateEmployee, EditEmployee } from './pages/Employees';
import { Status, CreateStatus, EditStatus } from './pages/Status';
import { CreateStation, EditStation, Stations } from './pages/Stations';
import { Schedules } from './pages/Schedules';

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
              <Route path="/employees" element={<Outlet/>}>
                <Route index element={<Employees/>}/>
                <Route path="create" element={<CreateEmployee/>}/>
                <Route path="edit/:id" element={<EditEmployee/>}/>
              </Route>
              <Route path="/status" element={<Outlet/>}>
                <Route index element={<Status/>}/>
                <Route path="create" element={<CreateStatus/>}/>
                <Route path="edit/:id" element={<EditStatus/>}/>
              </Route>
              <Route path="/stations" element={<Outlet/>}>
                <Route index element={<Stations/>}/>
                <Route path="create" element={<CreateStation/>}/>
                <Route path="edit/:id" element={<EditStation/>}/>
              </Route>
              <Route path="/schedules" element={<Outlet/>}>
                <Route index element={<Schedules/>}/>
                {/* <Route path="create" element={<CreateStation/>}/>
                <Route path="edit/:id" element={<EditStation/>}/> */}
              </Route>
            </Routes>
        </PageLayout>
      </PageTitleContext>
    </main>
  );
}

export default App;
