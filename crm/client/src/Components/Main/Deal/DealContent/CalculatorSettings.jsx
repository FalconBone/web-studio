import { useDispatch, useSelector } from 'react-redux'
import classes from './Calculator.module.css'
import { useEffect } from 'react'
import { fetchTimeTypes } from '../../../../store/constSlice'
import { changeDeal } from '../../../../store/dealSlice'

const CalculatorSettings = (props) => {

    const dispatch = useDispatch()
    const timeTypes = useSelector(state => state.consts.timeTypes)

    useEffect(() => {
        dispatch(fetchTimeTypes())
    }, [])

    const onChangeTerm = (value) => {
        dispatch(changeDeal({term: value}))
    }

    const onChangeTimeType = (value) => {
        dispatch(changeDeal({timeTypeId: value}))
    }

    return (
        <div className={classes.settings}>
            <div style={{marginBottom: '10px'}}>
                Срок реализации
            </div>
            <div>
                <input type="number" value={props.term} onChange={(e) => {onChangeTerm(e.target.value)}}/>
                <select value={props.timeTypeId} onChange={(e) => {onChangeTimeType(e.target.value)}}>
                    {timeTypes.map(type => <option id={type.id} value={type.id}>{type.name}</option>)}
                </select>
            </div>
        </div>
    )
}

export default CalculatorSettings