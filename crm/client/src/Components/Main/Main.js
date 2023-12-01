import DealList from './DealList/DealList';
import classes from './Main.module.css';

function Main() {
  return (
    <div className={classes.container}>
      <DealList/>
    </div>
  );
}

export default Main;
