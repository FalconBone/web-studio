import ApplicationElement from './ApplicationElement';
import classes from './Applications.module.css';
import { useSelector } from 'react-redux';

function ApplicationsContent() {

    const applications = useSelector(state => state.applications.applications)

    return (
        <div className={classes.content}>
            <table>
                <thead>
                    <tr className={classes.tr_head}>
                        <th className={classes.th_id}>
                            ID
                        </th>
                        <th>
                            Текст
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {applications?.map(app => <ApplicationElement text={app.text} id={app.id} key={app.id}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default ApplicationsContent;
