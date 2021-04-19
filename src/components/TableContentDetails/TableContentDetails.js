import styles from './TableContentDetails.module.css';

const TableContentDetails = ({ item }) => {

    const { adRequest, adResponse, clicks, date, impressions, revenue } = item;

    const renderRate = ((impressions/adResponse)*100).toFixed(2);

    return (
        <div className={styles.detailLine}>
            <p>{date}</p>

            <p>${revenue}</p>

            <p>{adRequest}</p>

            <p>{adResponse}</p>

            <p>{impressions}</p>

            <p>{clicks}</p>

            <p>{renderRate}%</p>
        </div>
    )
}

export default TableContentDetails;