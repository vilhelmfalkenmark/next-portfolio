import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tilt.scss';

const s = classNames.bind(styles);

const Tilt = ({ className, inverted, svgClassName }) => {
  return (
    <figure
      className={s('container', {
        [className]: className
      })}
    >
      {inverted ? (
        <svg
          className={s({ [svgClassName]: svgClassName })}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 100 100"
          height="266.667"
          preserveAspectRatio="none"
        >
          <path d="M0 100V0h100" />
        </svg>
      ) : (
        <svg
          className={s({ [svgClassName]: svgClassName })}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 100 100"
          height="100%"
          preserveAspectRatio="none"
        >
          <path d="M100 0v100H0" />
        </svg>
      )}
    </figure>
  );
};

Tilt.propTypes = {
  className: PropTypes.string,
  svgClassName: PropTypes.string,
  inverted: PropTypes.bool
};

export default Tilt;
