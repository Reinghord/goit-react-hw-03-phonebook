import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (submitName, submitNumber) => {
    if (this.state.contacts.find(contact => contact.name === submitName)) {
      return alert(`${submitName} is already in contacts.`);
    }
    this.setState(PreviousState => {
      return {
        contacts: [
          ...PreviousState.contacts,
          {
            id: nanoid(),
            name: submitName,
            number: submitNumber,
          },
        ],
      };
    });
  };

  onFilter = filterText => {
    this.setState({ filter: filterText });
  };

  onDelete = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <ContactList appState={this.state} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
