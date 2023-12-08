import { useDispatch, useSelector } from 'react-redux'
import classes from './Deal.module.css'
import DealContent from './DealContent'
import DealHeader from './DealHeader'
import DealInfo from './DealInfo'
import DealNavigation from './DealNavigation'
import { useEffect } from 'react'
import { fetchDealById } from '../../../store/dealSlice'
import { useParams } from 'react-router-dom'
import DealStatus from './DealStatus'

const Deal = () => {

    const {id} = useParams()

    const dispatch = useDispatch()
    
    const deal = useSelector(state => state.deals.deal)

    useEffect(() => {
        dispatch(fetchDealById(id))
    }, [])

    return (
        <div className={classes.container}>
            <DealHeader name={deal.name}/>
            <DealInfo id={deal.id}/>
            <DealStatus status={deal.dealStatusId}/>
            <DealNavigation/>
            <DealContent deal={deal}/>
        </div>
    )
}

export default Deal