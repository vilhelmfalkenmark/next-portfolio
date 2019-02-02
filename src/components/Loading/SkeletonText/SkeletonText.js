import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SkeletonText.scss';

const s = classNames.bind(styles);

const SkeletonText = ({ rows = 2 }) => {
  const r = [...Array(rows).keys()];

  return (
    <ul className={s('container')}>
      {r.map(r => (
        <li className={s('item')} key={r} />
      ))}
    </ul>
  );
};

SkeletonText.propTypes = {
  rows: PropTypes.number
};

export default SkeletonText;
