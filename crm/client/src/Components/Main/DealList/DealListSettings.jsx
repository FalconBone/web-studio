import { useSelector } from 'react-redux';
import classes from './DealList.module.css';

function DealListSettings() {

  const settings = useSelector(state => state.deals.settings)

  const onChangeName = () => {

  }

  return (
    <div className={classes.settings}>
      <div className={classes.settings_up}>
        <input value={settings.name}/>
        <input value={settings.client}/>
        <select value={settings.status}>

        </select>
        <select value={settings.dealType}>

        </select>
        <select value={settings.year}>

        </select>
        <select value={settings.month}>

        </select>
      </div>
      <div className={classes.settings_up}>
        <select>

        </select>
        <select>

        </select>
        <select className={classes.invisible}>

        </select>
        <select className={classes.invisible}>

        </select>
        <select className={classes.invisible}>

        </select>
        <select className={classes.invisible}>

        </select>
      </div>


    </div>
  );
}

export default DealListSettings;
