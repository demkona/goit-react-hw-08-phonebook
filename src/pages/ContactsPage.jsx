import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from '../components/Filter';
import '../App.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import scc from './pages.module.css';
import Container from '../components/Container/Container';


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={scc.title}>Phone book</h1>
      <ContactForm />
      <h2 className={scc.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
