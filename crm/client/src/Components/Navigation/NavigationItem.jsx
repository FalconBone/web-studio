import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
  return (
    <NavLink to={`/${props.url}`}>
      <div className={classes.container}>
        <div className={classes.image}>

        </div>
        <div className={classes.text}>
          {props.title}
        </div>
      </div>
    </NavLink>
  );
}

export default NavigationItem;
