import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TablesContainer from './components/TablesPage/TablesContainer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="app-wrapper-content">
          <Header />
          <Route path="/tables" render={ () => <TablesContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
