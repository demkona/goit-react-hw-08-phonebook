import { ContactListBox, ContactListItem } from './ContactList.styled';
import { useGetContactsQuery } from 'service/api';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';

const ContactList = ({ filter }) => {
  const { data } = useGetContactsQuery();

  const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  if (!contactsFiltered) {
    return <Loader />
  }

  return (
    <>
      <ContactListBox>
        {contactsFiltered.map(({ id, name, phone }) => (
          <ContactListItem key={id}>
            <ContactItem id={id} name={name} number={phone} />
          </ContactListItem>))}
      </ContactListBox></>
  );
};

export default ContactList;