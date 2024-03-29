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

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState(() => {
        return { contacts: [...JSON.parse(localStorage.getItem('contacts'))] };
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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

  onFilteredContacts = () => {
    const { contacts, filter } = this.state;

    if (filter) {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return contacts;
  };

  onDelete = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
      };
    });
  };

  render() {
    const filteredContacts = this.onFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
