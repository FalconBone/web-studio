import { useEffect } from 'react';
import classes from './DealList.module.css';
import DealListContent from './DealListContent';
import DealListHeader from './DealListHeader';
import DealListSettings from './DealListSettings';
import { fetchDeals } from '../../../store/dealSlice';
import { useDispatch } from 'react-redux';


function DealList() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDeals())
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
