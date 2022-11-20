
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import css from './UserMenu.module.css';
import { FcBusinessman } from 'react-icons/fc'




export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.container_user}>
      <span className={css.name}>Welcome {name} {' '}
        <FcBusinessman />
      </span>
      <Button className={css.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </div>
  );
}
