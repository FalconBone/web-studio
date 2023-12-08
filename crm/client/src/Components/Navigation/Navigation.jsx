import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <nav className={classes.container}>
      <div className={classes.profile_button}>

      </div>
      <div>
        <NavigationItem url={'applications'} title={'Анкеты'}/>
        <NavigationItem url={'deals'} title={'Сделки'}/>
        <NavigationItem title={'Клиенты'}/>
        <NavigationItem title={'Счета'}/>
        <NavigationItem title={'Отчеты'}/>
      </div>
    </nav>
  );
}

export default Navigation;
