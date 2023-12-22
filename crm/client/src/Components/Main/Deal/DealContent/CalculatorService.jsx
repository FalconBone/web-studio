import { useDispatch, useSelector } from 'react-redux'
import classes from './Calculator.module.css'
import React, { useEffect, useState } from 'react'
import { fetchProductDeals, fetchProducts } from '../../../../store/productSlice'
import { useParams } from 'react-router-dom'
import CalculatorServiceElement from './CalculatorServiceElement'
import { fetchPositionDeals, fetchPositions } from '../../../../store/positionSlice'

const CalculatorService = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const dispatch = useDispatch()

    const productsDeal = useSelector(state => state.products.productsDeal)
    const positionsDeal = useSelector(state => state.positions.positionsDeal)
    const positions = useSelector(state => state.positions.positions)
    const products = useSelector(state => state.products.products)


    useEffect(() => {
        dispatch(fetchProductDeals(id))
        dispatch(fetchPositionDeals(id))
        dispatch(fetchProducts())
        dispatch(fetchPositions())
        setIsLoading(false)
        console.log('Загрузка завершена');
    }, [])

    console.log('Товары', productsDeal);
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
                    {isLoading ? '' : (
                        <React.Fragment>
                            {positionsDeal.map(position => <CalculatorServiceElement position={position} positions={positions}/>)}
                            {productsDeal.map(product => <CalculatorServiceElement product={product} products={products}/>)}
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CalculatorService