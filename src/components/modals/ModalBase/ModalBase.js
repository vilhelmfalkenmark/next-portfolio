import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './ModalBase.scss';

const s = classNames.bind(styles);

const ModalBase = ({
  onCloseCallback,
  children,
  fullscreen,
  isOpen = false
}) => {
  return (
    <div
      className={s('container', {
        container_isClosed: !isOpen
      })}
    >
      <div className={s('inner')}>
        <button
          className={s('closeOverlay', {
            closeOverlay_isOpen: isOpen
          })}
          onClick={onCloseCallback ? onCloseCallback : null}
        />
        <div
          className={s('children', {
            children_isFullscreen: fullscreen,
            children_isOpen: isOpen
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ModalBase.propTypes = {
  children: PropTypes.node,
  onCloseCallback: PropTypes.func,
  isOpen: PropTypes.bool,
  fullscreen: PropTypes.bool // If modal should cover whole screen (Like a new page). E.g the search result modal.
};

export default ModalBase;
