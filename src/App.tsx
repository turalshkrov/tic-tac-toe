import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider } from './components/theme/themeProvider';

function App() {
  return (
      <div className='App'>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </div>
  )
}

export default App
