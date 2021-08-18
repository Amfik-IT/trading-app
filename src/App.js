import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TablesContainer from './components/Pages/TablesPage/TablesContainer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Pages/DashboardPage/Dashboard';
import { useEffect } from 'react';
import {loadingActionCreator, updateOperationActionCreator,errorActionCreator} from "./redux/operations-reducer"

function App(props) {
  
  useEffect(() => {
    props.store.dispatch(loadingActionCreator())
    fetch("https://invest-dimasik.herokuapp.com/api/trades?limit=10")
    .then(response => response.json())
    .then(items => props.store.dispatch(updateOperationActionCreator(items)))
    .catch(errors => props.store.dispatch(errorActionCreator(errors)))
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div class="main-content" id="panel">
          <Header />
          <div class="container-fluid mt--6">
            <Route path="/dashboard" render={ () => <Dashboard /> } />
            <Route path="/tables" render={ () => <TablesContainer />} />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
