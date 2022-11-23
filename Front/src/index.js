import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LoginForm } from './components/login-form';
import { RegisterForm } from './components/register-form';
import { MainPage } from './components/main-page';
import ShopComponent from "./components/shop-component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route path='login' element={<LoginForm />}/>
            <Route path='registration' element={<RegisterForm />}/>
            <Route path='main' element={<MainPage />}/>
            <Route path='shop' element={<ShopComponent />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>  
);
reportWebVitals();
