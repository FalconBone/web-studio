import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Main from './Main/Main';
import Navigation from './Navigation/Navigation';

function App() {

  return (
    <BrowserRouter>
      <div className={classes.app_container}>
        <Navigation />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
