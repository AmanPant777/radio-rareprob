import './App.css';
import Home from './comp/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import RadioMonkey from './screens/Radio/RadioMonkey';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<h1>Error Page</h1>}/>
        <Route path="/radio-monkey" element={<RadioMonkey/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
