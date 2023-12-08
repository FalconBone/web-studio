import { useDispatch, useSelector } from 'react-redux'
import classes from './Deal.module.css'
import { useEffect } from 'react';
import { fetchDealStatuses } from '../../../store/constSlice';

const DealStatus = (props) => {

    const dispatch = useDispatch()
    const statuses = useSelector(state => state.consts.dealStatuses)

    console.log(props.status);
    console.log(statuses);
    let wasCurrent = false

    useEffect(() => {
        dispatch(fetchDealStatuses())
    }, [])

    const statusesLine = statuses.map(status => {
        if (status.id !== props.status) {
            if (wasCurrent) {
                return <div className={classes.uncompleted + " " + classes.status}>{status.name}</div>
            } else {
                return <div className={classes.completed + " " + classes.status}>{status.name}</div>
            }
        } else {
            wasCurrent = true
            return <div className={classes.current + " " + classes.status}>{status.name}</div>
        }
    })

    return (
        <div className={classes.statuses}>
            {statusesLine}
        </div>
    )
}

export default DealStatus