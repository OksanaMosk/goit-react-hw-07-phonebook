import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContacts } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name}  is already in contacts`, {
        timeout: 6000,
      });
      return;
    }
    const finalContacts = {
      id: nanoid(),
      name,
      number,
    };
    Notiflix.Notify.success(`${name}  is added to contacts`, {
      timeout: 6000,
    });

    dispatch(addContacts(finalContacts));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <div className={css.contactForm}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <p className={css.inputName}>Name</p>
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange={handleInputChange}
            className={css.formInput}
            placeholder="Name"
            autoComplete="on"
            autoFocus
            required
          ></input>
        </label>
        <label htmlFor={numberInputId}>
          <p className={css.inputName}>Number</p>
          <input
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            onChange={handleInputChange}
            className={css.formInput}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="000-00-00"
            autoComplete="on"
            autoFocus
            required
          ></input>
        </label>
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}
