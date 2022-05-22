import './App.css';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import { getClients } from './components/useAxios';
import MainPage from './components/MainPage';

function App() {
  const dispatch = useDispatch();
  dispatch(getClients());

  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
