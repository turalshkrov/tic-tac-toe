import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SplashScreen from './pages/splash screen/SplashScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './pages/settings/Settings';
import PlayScreen from './pages/play/PlayScreen';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/play' element={<PlayScreen/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
