import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/contacts/contacts.reducer';

import css from './ContactList.module.css';

export const ContactList = () => {
  const id = useParams();
  const contacts = useSelector(state => state.contactsStore.contacts);
  // const isLoading = useSelector(state => state.contactsStore.isLoading);
  // const error = useSelector(state => state.contactsStore.error);
  const filter = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(id));
  }, [id, dispatch]);

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
        {visContacts.map(({ name, phone, id }) => (
          <ContactElement
            key={id}
            name={name}
            phone={phone}
            id={id}
            onRemoveContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
};
