import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from 'redux/filter/filter.reducer';
import { selectFilterTerm } from 'redux/filter/filter.selector';

import css from './Filter.module.css';

const Filter = () => {
  const filterTerm = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilterTerm(event.target.value));
  };

  return (
    <form className={css.formlFind}>
      <label className={css.labelFind}>
        Find contacts by name
        <input
          className={css.inputFind}
          type="text"
          value={filterTerm}
          onChange={changeFilter}
        />
      </label>
    </form>
  );
};
export default Filter;
