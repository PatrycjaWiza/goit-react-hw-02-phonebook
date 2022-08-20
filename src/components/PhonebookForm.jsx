import { Component } from 'react';
import { Label, Form } from './Styles';
import { Section } from './Section';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

export class PhonebookForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  ContactInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, contacts, number } = this.state;
    return (
      <>
        <Section title="Phonebook"></Section>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.ContactInputId}>Name</Label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.ContactInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor={this.ContactInputId}>Number</Label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.ContactInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </Form>

        <Section title="Contacts">
          <ul>
            {contacts.map((contact, id) => (
              <Contacts key={id} contact={contact} />
            ))}
          </ul>
        </Section>
      </>
    );
  }
}
