import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useState } from 'react';


const App = () => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter filter={filter} handleChange={handleChange} />
          <ContactList filter={filter} />
        </Container>
      </section>
    </>
  );
};

export default App;