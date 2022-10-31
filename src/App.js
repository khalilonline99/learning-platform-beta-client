import './App.css';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'



function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="App">

        <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle"/>

    </div>
  );
}

export default App;
