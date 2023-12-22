import React, { useEffect, useState } from 'react';
import classes from './DealList.module.css';
import DealListContent from './DealListContent';
import DealListHeader from './DealListHeader';
import DealListSettings from './DealListSettings';
import { fetchDeals } from '../../../store/dealSlice';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../store/userSlice';
import { fetchClients } from '../../../store/clientSlice';
import { fetchDealStatuses } from '../../../store/constSlice';


function DealList() {

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClients())
    dispatch(fetchDealStatuses())
    dispatch(fetchDeals())
    dispatch(fetchUsers())
      .then(() => {
        setIsLoading(false)
      })
  }, [])


  return (
    <div className={classes.container}>
      {isLoading ? '' : (
        <React.Fragment>
          <DealListHeader />
          <DealListSettings />
          <DealListContent />
        </React.Fragment>
      )}

    </div>
  );
}

export default DealList;
