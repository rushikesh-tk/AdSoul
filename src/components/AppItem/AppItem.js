import styles from './AppItem.module.css';
import { ReactComponent as RightArrow} from '../../assets/arrow-right.svg';

const AppItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <div className={styles.icon}/>
                    
                    <div className={styles.name}>
                        <h3>Dream 11</h3>
                        <p>Publisher Name</p>
                    </div>
                </div>

                <RightArrow/>
            </div>

            <div className={styles.details}>
                <div>
                    <p>Revenue</p>
                    <p>Value</p>
                </div>

                <div>
                    <p>Ad Requests</p>
                    <p>Value</p>
                </div>

                <div>
                    <p>Ad Response</p>
                    <p>Value</p>
                </div>

                <div>
                    <p>Impressions</p>
                    <p>Value</p>
                </div>
            </div>
        </div>
    )
}

export default AppItem;