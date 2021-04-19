import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Nav from '../../components/NavBar/NavBar';
import TableContentDetails from '../../components/TableContentDetails/TableContentDetails';
import { ReactComponent as LeftArrow } from '../../assets/arrow-left.svg';
import styles from './AppDetails.module.css';
import { Link } from 'react-router-dom';
import { getColorFromId } from '../../utils';

const AppDetails = ({ apps }) => {

    const { id } = useParams();
    const app = apps.find(e => e.id === id);

    const { isLoading, data } = useQuery('appDetail' + id, () =>
        fetch('https://api.npoint.io/d734975d2aee62d197ef/' + id).then(res => res.json())
    )

    return (
        <>
            <Nav />

            <div className={styles.container}>
                <div className={styles.appDetailsView}>
                    <Link to='/'>
                        <LeftArrow />
                    </Link>

                    <div className={styles.title}>
                        <div className={styles.icon} style={{ backgroundColor : getColorFromId(id) }}/>

                        <div className={styles.name}>
                            <h3>{app.appName}</h3>
                            <p>{app.publisherName}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.tableView}>
                    <div className={styles.tableHeading}>
                        <p>Date</p>

                        <p>Revenue</p>

                        <p>Ad Requests</p>

                        <p>Ad Responses</p>

                        <p>Impressions</p>

                        <p>Clicks</p>

                        <p>Render Rate</p>
                    </div>

                    <div className={styles.tableContent}>
                        {
                            isLoading ? <h2>Loading!!!</h2> : data.map(item => {
                                return <TableContentDetails item={item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDetails;