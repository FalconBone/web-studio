import { useEffect } from 'react';
import classes from './DealList.module.css';
import DealListContent from './DealListContent';
import DealListHeader from './DealListHeader';
import DealListSettings from './DealListSettings';
import { fetchDeals } from '../../../store/dealSlice';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../store/userSlice';
import { fetchClients } from '../../../store/clientSlice';


function DealList() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClients())
    dispatch(fetchDeals())
    dispatch(fetchUsers())
  }, [])


  return (
    <div className={classes.container}>
      <DealListHeader/>
      <DealListSettings/>
      <DealListContent/>
    </div>
  );
}

export default DealList;
