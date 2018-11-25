import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const s = classNames.bind(styles);
const headerRoutes = [
  {
    title: 'Hem',
    route: '/',
    pathname: '/Start'
  },
  {
    title: 'Projekt',
    route: '/projekt',
    pathname: '/Project'
  }
];

const Header = ({ router }) => (
  <header className={s({ container: true })} name="header">
    <div className={s({ inner: true })}>
      <Link route={'/'}>
        <img src={'/static/svg/ville.svg'} className={s('logo')} />
      </Link>
      <nav className={s({ navigation: true })}>
        <ul className={s({ list: true })}>
          {headerRoutes.map((route, index) => (
            <li
              key={index}
              className={s({
                item: true
              })}
            >
              <Link route={route.route}>
                <a
                  className={s({
                    link: true,
                    link_isActive: router.pathname.indexOf(route.pathname) > -1
                  })}
                >
                  {route.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Header);
