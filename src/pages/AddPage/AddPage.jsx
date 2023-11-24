import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

import css from './AddPage.module.css';

const AddPage = () => {
  const isLoading = useSelector(state => state.contactsStore.isLoading);
  const error = useSelector(state => state.contactsStore.error);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <NavLink className={css.goBack} to={backLinkRef.current}>
        Go back
      </NavLink>
      <div className={css.container}>
        <div>
          {isLoading && <Loader />} <ContactForm />
          {error !== null && <>{error}</>}
        </div>
      </div>
    </>
  );
};
export default AddPage;
