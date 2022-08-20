import { Component } from 'react';
import { Label, Form } from './Styles';
import { Section } from './Section';
import { Contacts } from './Contacts';
import { nanoid } from 'nanoid';

export class PhonebookForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  ContactInputId = nanoid();

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;
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

          <button type="submit">Add contact</button>
        </Form>

        <Section title="Contacts">
          {contacts.map((contact, id) => (
            <Contacts key={id} contact={contact} />
          ))}
        </Section>
      </>
    );
  }
}
