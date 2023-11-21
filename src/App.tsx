import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider } from './components/theme/themeProvider';
import SplashScreen from './pages/splash screen/SplashScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './pages/settings/Settings';

function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SplashScreen/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
