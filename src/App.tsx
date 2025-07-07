import './styles/global.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import CanvasElementsProvider from './context/CanvasElementsProvider';

function App() {
  return (
    <CanvasElementsProvider>
      <RouterProvider router={router}/>
    </CanvasElementsProvider>
  );
}

export default App;
