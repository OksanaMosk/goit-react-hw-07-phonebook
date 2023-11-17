import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);

  return (
    <>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <div className={css.container}>
        <div>
          <h2 className={css.title}>Add contact</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className={css.titleContacts}>Contacts</h2>
          {contacts.length > 0 ? (
            <Filter />
          ) : (
            <p className={css.noContacts}>
              &#128064;Add your first contact! Your phonebook is empty.&#128064;
            </p>
          )}
          {contacts.length > 0 && <ContactList />}
        </div>
      </div>
    </>
  );
};
