import classNames from 'classnames/bind';
import Tilt from 'components/layout/Tilt/Tilt';

import styles from './Footer.scss';

const s = classNames.bind(styles);

const Footer = () => (
  <footer className={s({ container: true })} name="footer">
    <Tilt className={s('tilt')} />
    <article className={s('content')}>
      <div className={s('row')}>
        <div
          className={s('column', {
            column_contact: true
          })}
        >
          <ul>
            <li>Tel: 0705580198</li>
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

export default Footer;
