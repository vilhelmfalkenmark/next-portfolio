import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from 'router/routes';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const routerConfig = require('router/config');

const s = classNames.bind(styles);
const headerRoutes = Object.keys(routerConfig).map(key => routerConfig[key]);

const Header = ({ router }) => (
  <header className={s({ container: true })} name="header">
    <menu className={s({ content: true })}>
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
              <Link route={route.routePattern}>
                <a
                  className={s({
                    link: true,
                    link_isActive: router.asPath === route.routePattern
                  })}
                >
                  {route.nav}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  </header>
);

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Header);
