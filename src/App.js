import './App.css';
import Header from './components/Header';
import { getClients } from './components/useAxios';

function App() {
  getClients();
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
