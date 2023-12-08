import { NavLink } from 'react-router-dom'
import classes from './Deal.module.css'

const DealNavigation = () => {

    const navs = [
        {
            name: 'Анкета',
            url: 'clientForm'
        },
        {
            name: 'Расчет стоимости',
            url: 'calculator'
        },
        {
            name: 'Коммерческое предложение',
            url: 'commercial'
        },
        {
            name: 'Документы',
            url: 'documents'
        },
        {
            name: 'Счета',
            url: 'bills'
        }
    ]

    const navsBlock = navs.map((nav, index) => {

        return (
            <NavLink to={nav.url} id={index}>
                <div>
                    <div>
                        {nav.name}
                    </div>
                </div>
            </NavLink>
        )
    })

    return (
        <div className={classes.navigation}>
            <div>
                В сделке: 
            </div>
            {navsBlock}
        </div>
    )
}

export default DealNavigation