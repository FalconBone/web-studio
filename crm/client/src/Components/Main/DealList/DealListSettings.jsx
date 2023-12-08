import { useDispatch, useSelector } from 'react-redux';
import classes from './DealList.module.css';
import { changeSettings } from '../../../store/dealSlice';
import { useEffect } from 'react';

function DealListSettings() {

  const settings = useSelector(state => state.deals.settings)
  const dispatch = useDispatch()

  const onChangeName = (e) => {
    dispatch(changeSettings({name: e}))
  }

  return (
    <div className={classes.settings}>
      <div className={classes.settings_up}>
        <input placeholder="Название" value={settings.name} onChange={(e) => {onChangeName(e.target.value)}}/>
        <input placeholder="Клиент" value={settings.client}/>
        <select value={settings.status}>
          <option value="" disabled selected hidden>
            Статус сделки
          </option>
        </select>
        <input type='date' value={settings.year}>

        </input>
        <input type='date' value={settings.month}>

        </input>
        <select>
          <option value="" disabled selected hidden>
            Менеджер
          </option>
        </select>
      </div>
      <div className={classes.settings_up}>
        <input type='number'>
        </input>
        <input type='number'>
        </input>
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
