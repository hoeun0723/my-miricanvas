import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import IntroPage from "../pages/IntroPage/IntroPage";
import OutroPage from "../pages/OutroPage/OutroPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <IntroPage/>,
    },
    {
        path:'/home',
        element: <Home/>,
    },
    {
        path: 'outro',
        element: <OutroPage/>,
    },
]);
export default router;