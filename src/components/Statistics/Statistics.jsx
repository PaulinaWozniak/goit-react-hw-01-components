import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const randomHexColor=()=> (
`#${Math.floor(Math.random() * 16777215).toString(16)}`
)

const Statistic = ({title ='Upload stats', stats}) => {
    return (
        <section className={styles.statistic}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(({ id, label, percentage }) => 
                    <li
                        className={styles.item}
                        key={id}
                        style= {{backgroundColor: randomHexColor()}}
                    >
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}</span>
                </li>
                )}
            </ul>
        </section>
      );
}
 
Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    ).isRequired,
}


export default Statistic;