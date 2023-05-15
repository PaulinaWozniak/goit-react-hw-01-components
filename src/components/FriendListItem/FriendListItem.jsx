import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return ( 
        <li className={styles.item}>
            <span className={isOnline ? styles.statusOnline : styles.statusOffline}>{isOnline}</span>
            <img className={avatar } src={avatar} alt={name} width='70'/>
            <span className={styles.name}>{name}</span>
        </li>
     );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
 
export default FriendListItem;