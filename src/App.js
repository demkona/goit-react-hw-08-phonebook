import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { authOperations, } from './redux/auth';
import LinearProgress from './components/Loader/Loader'

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <>
        <AppBar />
        <Switch>
          <Suspense fallback={<LinearProgress />}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute
              exact
              path="/login"
              redirectTo="/contacts"
              restricted
            >
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    </Container>
  );
}
