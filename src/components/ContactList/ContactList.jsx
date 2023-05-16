import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { filteredContacts } = this.props;

    return (
      <>
        <ul>
          {filteredContacts.map(contact => {
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
  filteredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
