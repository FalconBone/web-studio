import { useDispatch, useSelector } from 'react-redux'
import classes from './Calculator.module.css'
import CalculatorService from './CalculatorService'
import CalculatorSettings from './CalculatorSettings'
import { deleteDealById, fetchDeals, updateDealById } from '../../../../store/dealSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProducts } from '../../../../store/productSlice'
import { fetchPositions } from '../../../../store/positionSlice'
import axios from 'axios'

const DealCalculator = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickSave = () => {
        dispatch(updateDealById(props.deal.id))
        dispatch(fetchDeals())
    } 

    // const onClickTxt = async () => {
    //     await axios.post('http://localhost:5000/createTxt',
    //         {
    //             deal: props.deal
    //         }).then(async () => {
    //             const txt = await fetch('http://localhost:5000/file.txt')
    //             const txtBlob = await txt.blob();
    //             const txtUrl = URL.createObjectURL(txtBlob);
    //             let a = document.createElement('a');
    //             a.href = txtUrl;
    //             a.download = 'form.txt';
    //             a.click();
    //         }).then(async () => {
    //             await axios.get('http://localhost:5000/getFileInfo')
    //             .then((res) => {
    //                 alert('txt')
    //             })   
    //         })
    // }

    return (
        <div className={classes.calculator}>
            <header className={classes.header}>
                Расчет стоимости
            </header>
            <div style={{fontSize: '24px', marginBottom: '16px'}}>
                Параметры проекта
            </div>
            <CalculatorSettings term={props.deal.term} timeTypeId={props.deal.timeTypeId}/>
            <CalculatorService dealId={props.deal.id}/>
            <button onClick={onClickSave}>
                Сохранить
            </button>
        </div>
    )
}

export default DealCalculator