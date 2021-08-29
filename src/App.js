import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TablesContainer from './components/Pages/TablesPage/TablesContainer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Pages/DashboardPage/Dashboard';
import { useEffect } from 'react';
import { useState } from 'react';
import createRequest from './api/api';
import {NotificationContainer} from 'react-notifications';

function App(props) {
  const [pageInfo, setPageInfo] = useState({
    title: 'Dashboard',
    path: '',
    active: 'dashboard',
  });

  const [menuStatus, setMenuStatus] = useState(false);

  const menuToggler = () => {
    setMenuStatus( !menuStatus );
  }
  
  useEffect(() => {
    createRequest();
  },[])
  
  return (
    <BrowserRouter>
      <div className={`${menuStatus ? "nav-open" : ""} g-sidenav-show g-sidenav-hidden`}>
        <Navbar setInfo={setPageInfo} active={pageInfo.active}/>
        <div className="main-content" id="panel">
          <Header menuToggler={menuToggler} pageInfo={pageInfo}/>
          <div className="container-fluid mt--6">
            <Route path={"/dashboard"} render={ () => <Dashboard /> } />
            <Route path="/tables" render={ () => <TablesContainer />} />
            <Footer />
            <NotificationContainer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
