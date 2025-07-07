import './styles/global.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import {CanvasElementsProvider} from './context/CanvasContext/CanvasElementsProvider';
import ThemeModeProvider from './context/ThemeContext/ThemeModeProvider';

function App() {
  return (
    <ThemeModeProvider>
      <CanvasElementsProvider>
        <RouterProvider router={router}/>
      </CanvasElementsProvider>
    </ThemeModeProvider>
  );
}

export default App;
