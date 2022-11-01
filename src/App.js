import './App.css';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { RouterProvider } from 'react-router-dom';
import {router} from './Routes/Routes/Routes';



function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className='App'>
      
        <RouterProvider router={ router }></RouterProvider>
    </div>
  );
}

export default App;
