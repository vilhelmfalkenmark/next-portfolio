import { withRouter } from 'next/router';
import classNames from 'classnames/bind';
import Tilt from 'components/layout/Tilt/Tilt';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const s = classNames.bind(styles);

const Footer = ({ router }) => (
  <footer className={s({ container: true })} name="footer">
    <Tilt
      svgClassName={s('tilt')}
      className={s('tiltContainer', {
        tiltContainer_isStartPage: router.asPath === '/'
      })}
    />
    <article className={s('content')}>
      <div className={s('row')}>
        <div
          className={s('column', {
            column_contact: true
          })}
        >
          <ul>
            <li>Mail: vilhelmfalkenmark@gmail.com</li>
          </ul>
        </div>
        <div
          className={s('column', {
            column_info: true
          })}
        >
          <img
            src={'/static/images/ville.jpg'}
            className={s('image')}
            alt={'Vilhelm Falkenmark portrait'}
          />
          <p className={s('text')}>
            Jag är född uppvuxen i Stockholm och har alltid varit väldigt
            intresserad av teknik och kreativa processer. För tillfället arbetar
            jag som Webbutvecklare med fokus på Javascript hos Viaplay. När jag
            inte skriver kod spenderar jag min tid åt cykling, gitarrspelande,
            musik i allmänhet, min underbara fru och vår fina lilla dotter
            Viola.
          </p>
        </div>
      </div>
    </article>
  </footer>
);

Footer.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Footer);
