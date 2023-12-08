import Applications from './Applications/Applications';
import Deal from './Deal/Deal';
import DealList from './DealList/DealList';
import classes from './Main.module.css';
import {Routes, Route} from 'react-router-dom'


function Main() {

  return (
      <div className={classes.container}>
        <Routes>
          <Route path="/deals" element={<DealList />} />
          <Route path="/applications" element={<Applications/>} />
          <Route path="/deal/:id/*" element={<Deal/>} />
        </Routes>
      </div>
  );
}

export default Main;
