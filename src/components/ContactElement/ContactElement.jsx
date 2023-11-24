import css from './ContactElement.module.css';
import svgDelete from '../../images/delete.png';

export const ContactElement = ({ id, name, phone, onRemoveContact }) => {
  return (
    <li className={css.itemContact} key={id}>
      <div className={css.everyItem}>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      {
        <button
          className={css.buttonDelete}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(id)}
        >
          <img src={svgDelete} alt="{svgDelete}" width={20}></img>
        </button>
      }
    </li>
  );
};
