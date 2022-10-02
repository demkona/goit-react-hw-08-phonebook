import { useState } from 'react';
import PropTypes from 'prop-types';
import css from "../From/Form.module.css";

export function Form({ contacts, onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value)
                return;
            case 'number':
                setNumber(value)
                return;
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={css.form}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button type='submit'>Add contact</button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    contacts: PropTypes.array,
}
// export class Form extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func,
//     };

//     state = {
//         name: '',
//         number: '',
//     };

//     inputNameId = nanoid();
//     inputTelId = nanoid();

//     handleChange = (e) => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={css.form}>
//                 <label>
//                     Name
//                     <input
//                         id={this.inputNameId}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <label>
//                     Number
//                     <input
//                         id={this.inputTelId}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <button type='submit'>Add contact</button>
//             </form>
//         )
//     }
// }