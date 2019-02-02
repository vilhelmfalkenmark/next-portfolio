import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Experience.scss';

const s = classNames.bind(styles);

const Experience = ({ experience }) => {
  return (
    <li className={s('container')}>
      <div className={s('left')}>
        <img src={experience.logoUrl} className={s('logo')} />
      </div>
      <div className={s('right')}>
        <h3 className={s('heading')}>{experience.title}</h3>
        <h4>
          {experience.startDate} - {experience.endDate}
        </h4>
        <p className={s('content')}>{experience.description}</p>
      </div>
    </li>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({})
};

export default Experience;
