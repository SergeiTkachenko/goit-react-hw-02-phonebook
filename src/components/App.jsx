import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { AddForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { ContactFilter } from './ContactsFilter/ContactFilter';
import { nanoid } from 'nanoid';

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

  // addContact = newContact => {
  //   this.satState(prevState => {
  //     return {
  //       contacts: { ...prevState.contacts, newContact },
  //     };
  //   });
  // };
  addContact = (newName, number) => {
    const isNotUnique = this.state.contacts.some(
      ({ name }) => name === newName
    );
    if (isNotUnique) {
      return alert(`${newName} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = ContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== ContactId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <AddForm onSubmit={this.addContact} />
        <ContactFilter />
        <ContactList
          items={this.state.contacts}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
