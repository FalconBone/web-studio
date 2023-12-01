import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <nav className={classes.container}>
      <NavigationItem/>
      <NavigationItem/>
      <NavigationItem/>
      <NavigationItem/>
    </nav>
  );
}

export default Navigation;
