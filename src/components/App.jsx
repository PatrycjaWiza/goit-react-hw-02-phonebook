import { Component } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Title } from './Styles';
import { PhoneBookForm } from './PhonebookForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterByName = e => {
    const { filter, contacts } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  contactSubmit = values => {
    console.log(this.state.contacts);
    const { contacts } = this.state;
    return contacts.push(values);
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Title>Phonebook</Title>
        <PhoneBookForm onSubmit={this.contactSubmit} />
        <Title>Contacts</Title>
        <Filter value={filter} filterByName={this.handleChange} />
        <Contacts filterByName={this.filterByName} />
      </div>
    );
  }
}