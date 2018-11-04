import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const s = classNames.bind(styles);

const Header = () => (
  <header className={s('container')}>
    <Link href="/LandingPage">
      <a>Hem</a>
    </Link>
    <Link href="/Projects">
      <a>Projekt</a>
    </Link>
  </header>
);

export default Header;
