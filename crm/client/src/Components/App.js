import classes from './App.module.css';
import Main from './Main/Main';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className={classes.app_container}>
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;
