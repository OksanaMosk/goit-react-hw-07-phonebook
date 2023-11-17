import React from 'react';
import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts.reducer';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visContacts = visibleContacts();

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        {visContacts.map(({ name, number, id }) => (
          <ContactElement
            key={id}
            name={name}
            number={number}
            id={id}
            onRemoveContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
};
