import css from './ContactElement.module.css';
import svgDelete from '../../images/delete.png';
export const ContactElement = ({ id, name, phone, onRemoveContact }) => {
  return (
    <li className={css.itemContact} key={id}>
      <p>{name + ':  ' + phone}</p>
      {
        <button
          className={css.buttonDelete}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(id)}
        >
          delete
          <img
            className={css.iconDelete}
            src={svgDelete}
            alt="{svgDelete}"
            width={20}
          ></img>
        </button>
      }
    </li>
  );
};
