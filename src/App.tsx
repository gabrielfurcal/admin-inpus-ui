import React, { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Collapse, initTWE } from "tw-elements";

import Menu from './components/Menu';
import { PageTitleContext } from './contexts/PageTitleContext';
import { PageLayout } from './layouts/PageLayout';
import { Cities, CreateCity, EditCity } from './pages/Cities';
import { CreateEmployee, EditEmployee, Employees } from './pages/Employees';
import Home from './pages/Home';
import { CreateRoute, EditRoute, RoutesPage } from './pages/Routes';
import { CreateSchedule, EditSchedule, Schedules } from './pages/Schedules';
import { CreateStation, EditStation, Stations } from './pages/Stations';
import { CreateStatus, EditStatus, Status } from './pages/Status';
import { CreateTimezone, EditTimezone, Timezones } from './pages/Timezones';
import { CreateTrain, EditTrain, Trains } from './pages/Trains';
import { CreateTrip, EditTrip, Trips } from './pages/Trips';
import { CreateWeekday, EditWeekday, Weekdays } from './pages/Weekdays';

import './App.css';

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
                <Route path="create" element={<CreateSchedule/>}/>
                <Route path="edit/:id" element={<EditSchedule/>}/>
              </Route>
              <Route path="/routes" element={<Outlet/>}>
                <Route index element={<RoutesPage/>}/>
                <Route path="create" element={<CreateRoute/>}/>
                <Route path="edit/:id" element={<EditRoute/>}/>
              </Route>
              <Route path="/trips" element={<Outlet/>}>
                <Route index element={<Trips/>}/>
                <Route path="create" element={<CreateTrip/>}/>
                <Route path="edit/:id" element={<EditTrip/>}/>
              </Route>
              <Route path="/weekdays" element={<Outlet/>}>
                <Route index element={<Weekdays/>}/>
                <Route path="create" element={<CreateWeekday/>}/>
                <Route path="edit/:id" element={<EditWeekday/>}/>
              </Route>
              <Route path="/timezones" element={<Outlet/>}>
                <Route index element={<Timezones/>}/>
                <Route path="create" element={<CreateTimezone/>}/>
                <Route path="edit/:id" element={<EditTimezone/>}/>
              </Route>
            </Routes>
        </PageLayout>
      </PageTitleContext>
    </main>
  );
}

export default App;
