import { useEffect } from 'react';
import classes from './Applications.module.css';
import { useDispatch } from 'react-redux';
import ApplicationHeader from './ApplicationHeader';
import ApplicationsContent from './ApplicationsContent';
import { fetchApplications } from '../../../store/applicationSlice';



function Applications() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApplications())
  }, [])


  return (
    <div className={classes.container}>
      <ApplicationHeader/>
      <ApplicationsContent/>
    </div>
  );
}

export default Applications;
