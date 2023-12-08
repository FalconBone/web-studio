import { Route, Routes } from 'react-router-dom'
import classes from './Deal.module.css'
import DealCalculator from './DealContent/DealCalculator'
import DealClientForm from './DealContent/DealClientForm'

const DealContent = (props) => {

    return (
        <div className={classes.content}>
            <Routes>
                <Route path="/clientForm" element={<DealClientForm />} />
                <Route path="/calculator" element={<DealCalculator deal={props.deal}/>} />
            </Routes>
        </div>
    )
}

export default DealContent