import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route, 
  RouterProvider
} from 'react-router-dom'

import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import LoggedIn from './routes/LoggedIn';

import './index.css';

const Root = () => { 
  return (  
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='register' element={<SignUpPage />} />
      <Route path='/loggedin' element={<LoggedIn />} />
    </Route>
  )
); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);