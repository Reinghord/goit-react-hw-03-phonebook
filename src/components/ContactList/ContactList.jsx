import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props.appState;

    return (
      <>
        <ul>
          {contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map(contact => {
              return (
                <ListItem key={contact.id}>
                  {contact.name}: {contact.number}{' '}
                  <Button
                    onClick={() => {
                      this.props.onDelete(contact.id);
                    }}
                  >
                    Delete
                  </Button>
                </ListItem>
              );
            })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  appState: PropTypes.exact({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
