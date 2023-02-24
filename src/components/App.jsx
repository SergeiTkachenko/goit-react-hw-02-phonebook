import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { ContactFilter } from './ContactsFilter/ContactFilter';

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
        <Form />
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
