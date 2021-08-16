import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TablesContainer from './components/TablesPage/TablesContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TablesContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
