import { Link } from 'routes';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import Router from 'next/router';

const s = classNames.bind(styles);

const Header = () => (
  <header className={s('container')}>
    <Link route="/">
      <a>Hem</a>
    </Link>
    <Link route="/projekt">
      <a>Projekt</a>
    </Link>
  </header>
);

export default Header;
