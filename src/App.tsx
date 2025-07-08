import './styles/global.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import ThemeModeProvider from './context/ThemeContext/ThemeModeProvider';
import { CanvasProvider } from './context/CanvasContext/CanvasContext';

function App() {
  return (
    <ThemeModeProvider>
      <CanvasProvider>
        <RouterProvider router={router}/>
      </CanvasProvider>
    </ThemeModeProvider>
  );
}

export default App;
