import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <nav className={classes.container}>
      <div className={classes.profile_button}>

      </div>
      <div className={classes.nav_items}>
        <NavigationItem url={'applications'} title={'Анкеты'}/>
        <NavigationItem url={'deals'} title={'Сделки'}/>
      </div>
    </nav>
  );
}

export default Navigation;
