import classNames from 'classnames/bind';
import styles from './Footer.scss';

const s = classNames.bind(styles);

const Header = () => (
  <footer className={s({ container: true })} name="footer">
    <div className={s('inner')}>
      <p>FOOTER!</p>
    </div>
  </footer>
);

export default Header;
