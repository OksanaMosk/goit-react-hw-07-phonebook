import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number, onRemoveContact }) => {
  return (
    <li className={css.itemContact} key={id}>
      <p>{name + ':  ' + number}</p>
      {
        <button
          className={css.buttonDelete}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(id)}
        >
          delete
        </button>
      }
    </li>
  );
};
