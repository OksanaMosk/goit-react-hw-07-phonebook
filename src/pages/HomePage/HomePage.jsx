import css from './HomePage.module.css';
import photo from 'images/pngimg.com - thunder_PNG49.png';
const HomePage = () => {
  return (
    <div className={css.homePage}>
      <img src={photo} alt="{svgDelete}" width={300} height={300}></img>
    </div>
  );
};
export default HomePage;
