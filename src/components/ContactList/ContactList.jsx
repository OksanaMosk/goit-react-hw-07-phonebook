import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/contacts/contacts.reducer';

import css from './ContactList.module.css';
// import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const id = useParams();
  const contacts = useSelector(state => state.contactsStore.contacts);
  // const isLoading = useSelector(state => state.contactsStore.isLoading);
  // const error = useSelector(state => state.contactsStore.error);
  const filter = useSelector(state => state.filterStore.filter);
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
        .includes(filter.toString().toLowerCase())
    );
  };

  const visContacts = visibleContacts();

  return (
    <div className={css.contactContainer}>
      {/* {isLoading && <Loader />} */}
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
