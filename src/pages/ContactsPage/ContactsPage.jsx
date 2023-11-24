import React from 'react';

import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './ContactsPage.module.css';
import { useRef } from 'react';
import Page404 from 'pages/Page404/Page404';
import { Navigate } from 'react-router-dom';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts.selector';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  <Routes>
    <Route path="/contacts/404" element={<Page404 />} />
  </Routes>;

  return (
    <div>
      {error !== null && <Navigate to="/contacts/404" replace={true} />}
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go back
      </NavLink>
      {isLoading && <Loader className={css.loader} />}

      {contacts.length !== 0 ? (
        <Filter />
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
