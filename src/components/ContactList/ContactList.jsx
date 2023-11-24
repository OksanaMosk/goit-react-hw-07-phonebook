import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/contacts/contacts.reducer';

import css from './ContactList.module.css';

export const ContactList = () => {
  const id = useParams();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filterTerm = useSelector(state => state.filterStore.filterTerm);
  const dispatch = useDispatch();
  const mpDelete = 'https://audio.code.org/failure3.mp3';

  useEffect(() => {
    dispatch(fetchContacts(id));
  }, [id, dispatch]);

  const removeContact = contactId => {
    dispatch(deleteContacts(contactId));
    new Audio(mpDelete).play();
  };

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toString()
        .toLowerCase()
        .includes(filterTerm.toString().toLowerCase())
    );
  };

  const visContacts = visibleContacts();
  const sorted = [...visContacts].sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        {sorted.map(({ name, phone, id }) => (
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
