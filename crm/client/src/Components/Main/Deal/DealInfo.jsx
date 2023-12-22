import { useDispatch } from 'react-redux'
import classes from './Deal.module.css'
import { deleteDealById } from '../../../store/dealSlice'
import { useNavigate } from 'react-router-dom'

const DealInfo = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickDelete = () => {
        dispatch(deleteDealById(props.deal.id))
        navigate('../../deals')
    }

    return (
        <div className={classes.container_info}>
            ID {props.id}
            <button onClick={onClickDelete}>
                Удалить
            </button>
        </div>
    )
}

export default DealInfo