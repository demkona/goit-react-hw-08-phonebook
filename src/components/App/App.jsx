import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Global styles={GlobalStyles} />
          <section>
            <Container>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </Container>
          </section>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
