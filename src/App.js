import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import AllFood from './Components/AllFood/AllFood';
import Pizza from './Components/Pizza/Pizza';
import Fish from './Components/Fish/Fish';
import Burger from './Components/Burger/Burger';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', children: [
        { path: '/', element: <AllFood></AllFood> },
        { path: '/allFood', element: <AllFood></AllFood> },
        { path: '/pizza', element: <Pizza></Pizza> },
        { path: 'fish', element: <Fish></Fish> },
        { path: '/burger', element: <Burger></Burger> }
      ], element: <Main></Main>
    },
    { path: '*', element: <div>This page is not Found!Please Try Again</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
