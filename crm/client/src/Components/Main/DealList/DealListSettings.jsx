import { useDispatch, useSelector } from 'react-redux';
import classes from './DealList.module.css';
import { changeSettings } from '../../../store/dealSlice';
import { useEffect } from 'react';

function DealListSettings() {

  const settings = useSelector(state => state.deals.settings)
  const statuses = useSelector(state => state.consts.dealStatuses)

  const onChangeStatus = (e) => {
    console.log(e);
    dispatch(changeSettings({statuses: e}))
  }

  const statusesOptions = statuses.map(stat => <option value={stat.id}>{stat.name}</option>)

  const dispatch = useDispatch()

  const onChangeName = (e) => {
    dispatch(changeSettings({name: e}))
  }

  const onChangeClient = (e) => {
    dispatch(changeSettings({clientName: e}))
  }

  const onChangeFirstDate = (e) => {
    dispatch(changeSettings({name: e}))
  }

  const onChangeSecondDate = (e) => {
    dispatch(changeSettings({name: e}))
  }

  const onChangeManager = (e) => {
    dispatch(changeSettings({name: e}))
  }

  const onClickClear = () => {
    dispatch(changeSettings({
      name: '',
      clientName: '',
      statuses: '',
      dealType: '',
      year: null,
      month: null,
      managers: null
    }))
  }


  return (
    <div className={classes.settings}>
      <div className={classes.settings_up}>
        <input placeholder="Название" value={settings.name} onChange={(e) => {onChangeName(e.target.value)}}/>
        <input placeholder="Клиент" value={settings.client} onChange={(e) => {onChangeClient(e.target.value)}}/>
        <select value={settings.statuses} onChange={(e) => {onChangeStatus(e.target.value)}}>
          <option value="" disabled selected hidden>
            Статус сделки
          </option>
          {statusesOptions}
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
      <button onClick={onClickClear}>Очистить</button>

    </div>
  );
}

export default DealListSettings;
