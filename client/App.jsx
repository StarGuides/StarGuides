import React from 'react';
import { Link, Routes, Route} from 'react-router-dom'
import AnalyticsPage from './components/AnalyticsPage';
import CustomersPage from './components/CustomersPage';
import ViewsArea from './components/ViewsArea';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/customers' element={< MainPage/>}  />
      <Route path='/analytics' element={<MainPage/>} / >
      <Route path='*' element={< ErrorPage/>} / >
    </Routes>
    </>
  )
}

export default App;