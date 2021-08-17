import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TablesContainer from './components/Pages/TablesPage/TablesContainer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Pages/DashboardPage/Dashboard';

function App() {
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
