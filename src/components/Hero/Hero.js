import React from 'react';
import classNames from 'classnames/bind';
import styles from './Hero.scss';
import { getLazyImages } from 'utils/selectors/images';

const s = classNames.bind(styles);

const Hero = ({ imageData, children, title, darkOverlay }) => {
  return (
    <section className={s('container')}>
      <picture
        className={`${s('image', {
          image_withDarkOverlay: darkOverlay
        })} lazyload`}
        data-bgset={imageData.lazyImages}
        data-sizes="auto"
      />
    </section>
  );
};

export default Hero;
