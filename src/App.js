import './App.css';
import Home from './comp/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import RadioMonkey from './screens/Radio/RadioMonkey';
import CountryPage from './screens/Radio/CountryPage';
import StationScreen from './RadioComp/AllStation/StationScreen';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<h1>Error Page</h1>}/>
        <Route path='/radio-monkey/radiostation' element={<CountryPage/>}/>
        <Route path="/radio-monkey"  element={<RadioMonkey />}/>
        <Route path="/radio-monkey/station" element={<StationScreen/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
