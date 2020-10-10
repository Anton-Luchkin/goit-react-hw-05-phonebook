import React, { Component } from 'react';
import ShortId from 'shortid';

import Wrapper from './Wrapper/Wrapper';
import Notification from './Notification/Notification';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showNotification: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    for (const contact of contacts) {
      const hideNotification = () => {
        this.setState({ showNotification: false });
      };

      const notificationTimer = () => {
        setTimeout(hideNotification, 3000);
      };

      if (name === contact.name) {
        this.setState({ showNotification: true });
        notificationTimer();
        clearTimeout(notificationTimer);
        return;
      }
    }

    const contact = {
      id: ShortId.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    const { filter, showNotification } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <div>
          <Notification showNotification={showNotification} />
          <Title showNotification={showNotification} />
          <div className={styles.container}>
            <ContactForm onSubmitForm={this.addContact} />
            <div className={styles.contactsListContainer}>
              <Filter value={filter} onChange={this.changeFilter} />
              <ContactList
                contacts={visibleContacts}
                onDeleteContact={this.deleteContact}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
