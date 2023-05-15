import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({transaction}) => {
    return ( 
        <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transaction.map(({ id, amount, currency, type }) => (
            <tr className={styles.trColumn} key={id}>
                <td className={styles.stringTd}>{type}</td>
                <td className={styles.stringTd}>{amount}</td>
                <td className={styles.stringTd}>{currency}</td>
            </tr>
        ))}
  </tbody>
</table>
     );
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ).isRequired,
}
 
export default TransactionHistory;