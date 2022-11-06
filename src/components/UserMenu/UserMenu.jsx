
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import { FcButtingIn } from 'react-icons/fc'




export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container_user}>
      <span className={styles.name}>Welcome {name} {' '}
        <FcButtingIn />
      </span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </div>
  );
}
