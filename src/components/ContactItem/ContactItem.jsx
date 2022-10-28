import { useDeleteContactMutation } from "service/api";
import { ContactItemBtn, ContactListLink } from "./ContactItem.styled";
import Notiflix from 'notiflix';

const ContactItem = ({ id, name, number }) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    return (
        <>
            <ContactListLink href="tel:{number}">{name}</ContactListLink>
            <ContactListLink href="tel:{number}">{number}</ContactListLink>
            <ContactItemBtn
                type="submit"
                name={name}
                disabled={isDeleting}
                onClick={() => deleteContact(id)}>
                {isDeleting ? Notiflix.Notify.failure(`contact ${name} deleted`) : 'Delete'}
            </ContactItemBtn>
        </>
    );
}
export default ContactItem;