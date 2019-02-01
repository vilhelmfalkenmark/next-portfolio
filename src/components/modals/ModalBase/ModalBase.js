import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './ModalBase.scss';

const s = classNames.bind(styles);

class ModalBase extends Component {
  constructor() {
    super();

    this.state = {
      hasBeenOpened: false
    };

    this.onClose = this.onClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.isOpen) {
      return { ...nextState, hasBeenOpened: true };
    }
    return {};
  }

  onClose() {
    this.setState({
      hasBeenOpened: true
    });

    this.props.onCloseCallback();
  }

  render() {
    const {
      onCloseCallback,
      children,
      title = '',
      isOpen = false
    } = this.props;

    return (
      <div
        className={s('container', {
          container_hasBeenOpened: this.state.hasBeenOpened,
          container_isClosed: !isOpen,
          container_isOpen: isOpen
        })}
      >
        <div className={s('inner')}>
          <button
            className={s('closeOverlay', {
              closeOverlay_isOpen: isOpen
            })}
            onClick={onCloseCallback ? this.onClose : null}
          />
          <div
            className={s('children', {
              children_isOpen: isOpen,
              children_isClosed: !isOpen
            })}
          >
            <header className={s('headingContainer')}>
              <h3 className={s('heading')}>{title}</h3>
              <button className={s('closeButton')} onClick={this.onClose} />
            </header>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ModalBase.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onCloseCallback: PropTypes.func,
  isOpen: PropTypes.bool
};

export default ModalBase;
