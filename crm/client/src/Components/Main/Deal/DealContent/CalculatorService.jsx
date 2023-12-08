import { useDispatch, useSelector } from 'react-redux'
import classes from './Calculator.module.css'
import { useEffect } from 'react'

const CalculatorService = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        
    }, [])

    return (
        <div className={classes.service}>
            <table>
                <thead>
                    <tr className={classes.tr_head}>
                        <th className={classes.th_id}>
                            Товар / Услуга
                        </th>
                        <th>
                            Срок / Комментарий
                        </th>
                        <th>
                            Кол-во
                        </th>
                        <th>
                            Цена
                        </th>
                        <th>
                            Итого
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default CalculatorService