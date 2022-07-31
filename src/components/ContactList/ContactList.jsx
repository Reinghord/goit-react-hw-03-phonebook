import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

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
                <li className={s.item} key={contact.id}>
                  {contact.name}: {contact.number}{' '}
                  <button
                    className={s.button}
                    onClick={() => {
                      this.props.onDelete(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  appState: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
