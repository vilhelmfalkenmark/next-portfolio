import { Link } from 'routes';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const s = classNames.bind(styles);

const Header = () => (
  <header className={s({ container: true })} name="header">
    <div className={s({ inner: true })}>
      <Link route={'/'}>
        <img src={'/static/svg/ville.svg'} className={s('logo')} />
      </Link>
      <nav className={s({ navigation: true })}>
        <ul className={s({ list: true })}>
          <li
            className={s({
              item: true
            })}
          >
            <Link route="/">
              <a className={s({ link: true })}>Hem</a>
            </Link>
          </li>
          <li
            className={s({
              item: true
            })}
          >
            <Link route="/projekt">
              <a className={s({ link: true })}>Projekt</a>
            </Link>
          </li>
          <li
            className={s({
              item: true
            })}
          >
            <Link route="/projekt/kombispel">
              <a className={s({ link: true })}>Kombispel</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
