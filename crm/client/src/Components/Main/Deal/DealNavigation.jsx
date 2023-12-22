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
            <NavLink to={nav.url} id={index} className={({isActive}) => isActive ? classes.nav_item + " " +  classes.nav_item_active : classes.nav_item}>
                <div >
                    <div>
                        {nav.name}
                    </div>
                    <div>

                    </div>
                </div>
            </NavLink>
        )
    })

    return (
        <div className={classes.nav_container}>
            <div className={classes.navigation}>
            <div  style={{marginRight: '20px'}}>
                В сделке: 
            </div>
            {navsBlock}
        </div>
        </div>
        
    )
}

export default DealNavigation