import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './Page404.module.css';
import error1 from 'images/imagesError1.jpg';
import error2 from 'images/imageError2.jpg';

const Page404 = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  return (
    <div>
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go Home
      </NavLink>
      <h2 className={css.errorMainTitle}>Opssss...Error...</h2>
      <div className={css.errorAbout}>
        <div className={css.errorSection}>
          <h3 className={css.errorTitle}>The bad news</h3>
          <p className={css.error}>Your contacts are lost somewhere...</p>
          <img src={error1} alt="{svgDelete}" width={300} height={200}></img>
        </div>
        <div className={css.errorSection}>
          <h3 className={css.errorTitle}>The good news</h3>
          <p className={css.error}> They will definitely come back!</p>
          <img src={error2} alt="{error2}" width={300} height={200}></img>{' '}
        </div>
      </div>
    </div>
  );
};
export default Page404;
