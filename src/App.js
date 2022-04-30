import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Settings from './Components/Settings';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container mt-5'>
        <Shop/>
        <Settings/>
      </div>
    </div>
  );
}

export default App;
