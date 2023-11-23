import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './ContactsPage.module.css';
import { useRef } from 'react';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <div>
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go back
      </NavLink>
      {contacts.length !== 0 ? (
        <>
          <Filter />
        </>
      ) : (
        <p className={css.noContacts}>
          <span className={css.noSpan}>&#128064;</span> Add your first contact!
          Your phonebook is empty.
          <span className={css.noSpan}>&#128064;</span>
        </p>
      )}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
