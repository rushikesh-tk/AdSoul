import styles from './AppItem.module.css';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';



const AppItem = ({ name, publisher, stats, color }) => {
    const { revenue, adRequest, adResponse, impressions } = stats;

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <div className={styles.icon} style={{ backgroundColor : color }} />

                    <div className={styles.name}>
                        <h3>{name}</h3>
                        <p>{publisher}</p>
                    </div>
                </div>

                <RightArrow />
            </div>

            <div className={styles.details}>
                <div>
                    <p>Revenue</p>
                    <p>${revenue}</p>
                </div>

                <div>
                    <p>Ad Requests</p>
                    <p>{(adRequest/10e6).toFixed(1)}M</p>
                </div>

                <div>
                    <p>Ad Response</p>
                    <p>{(adResponse/10e6).toFixed(1)}M</p>
                </div>

                <div>
                    <p>Impressions</p>
                    <p>{(impressions/10e3).toFixed(1)}K</p>
                </div>
            </div>
        </div>
    )
}

export default AppItem;