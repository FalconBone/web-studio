import { useEffect } from 'react';
import classes from './DealList.module.css';
import { useSelector } from 'react-redux';
import DealListElement from './DealListElement';

function DealListContent() {

    const deals = useSelector(state => state.deals.deals)

    return (
        <div className={classes.content}>
            <table>
                <thead>
                    <tr className={classes.tr_head}>
                        <th className={classes.th_id}>
                            ID
                        </th>
                        <th>
                            Название / Номер
                        </th>
                        <th>
                            SMART
                        </th>
                        <th>
                            Клиент
                        </th>
                        <th>
                            Бюджет
                        </th>
                        <th>
                            Менеджер
                        </th>
                        <th>
                            Создана
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {deals ? deals.map(deal => <DealListElement deal={deal} key={deal.id}/>) : undefined}
                </tbody>
            </table>
        </div>
    );
}

export default DealListContent;
