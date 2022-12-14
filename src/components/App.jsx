import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {

  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <div
        style={{
          boxShadow: '0px 0px 6px 5px rgba(128, 187, 236, 0.75)',
          borderRadius: '4px',
          padding: '20px',
        }}
      >
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
