import classes from './Calculator.module.css'
import CalculatorSettings from './CalculatorSettings'

const DealCalculator = (props) => {

    return (
        <div className={classes.calculator}>
            <header className={classes.header}>
                Расчет стоимости
            </header>
            <div style={{fontSize: '24px', marginBottom: '16px'}}>
                Параметры проекта
            </div>
            <CalculatorSettings term={props.deal.term} timeTypeId={props.deal.timeTypeId}/>
        </div>
    )
}

export default DealCalculator