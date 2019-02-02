import React from 'react';
import { Link } from 'router/routes';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SolidSpinner from 'components/Loading/SolidSpinner';
// import ButtonBase from '@material-ui/core/ButtonBase';

import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY,
  BUTTON_SIZE_SMALL,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_LARGE
} from 'utils/constants/buttonTypes';

import styles from './Button.scss';

const s = classNames.bind(styles);

const Button = ({
  href,
  internalHref, // <-- Link within the page
  color,
  outlined,
  size,
  text,
  icon,
  iconLeft,
  className,
  skeleton,
  // ,
  onClickCallback,
  loading
}) => {
  /**
   * Button classNames
   */
  const BUTTON_CLASSES = s('container', {
    // New colors
    container_primary: color === BUTTON_COLOR_PRIMARY,
    container_primary_solid: color === BUTTON_COLOR_PRIMARY && !outlined,
    container_primary_outlined: color === BUTTON_COLOR_PRIMARY && outlined,
    container_secondary: color === BUTTON_COLOR_SECONDARY,
    container_secondary_solid: color === BUTTON_COLOR_SECONDARY && !outlined,
    container_secondary_outlined: color === BUTTON_COLOR_SECONDARY && outlined,
    container_skeleton: skeleton,

    // Sizes
    container_small: size === BUTTON_SIZE_SMALL,
    container_medium: size === BUTTON_SIZE_MEDIUM,
    container_large: size === BUTTON_SIZE_LARGE,
    // Loading
    container_loading: loading,
    [className]: className
  });

  /**
   * Icon classNames
   */
  // const BUTTON_ICON_CLASSES = s('icon', {
  //   icon_left: iconLeft,
  //   icon_small: size === BUTTON_SIZE_SMALL,
  //   icon_medium: size === BUTTON_SIZE_MEDIUM,
  //   icon_large: size === BUTTON_SIZE_LARGE,
  //   [iconClassName]: iconClassName
  // });

  const getButtonIcon = () => {
    return null;
    // switch (icon) {
    //   case ICON_ARROW:
    //     return <ArrowIcon className={BUTTON_ICON_CLASSES} />;
    //   default:
    //     return null;
    // }
  };

  const getInnerMarkup = () => {
    return (
      <span
        className={s('inner', {
          inner_withIcon: icon,
          inner_iconLeft: iconLeft,
          inner_loading: loading
        })}
      >
        {loading && <SolidSpinner className={s('spinner')} />}
        <span
          className={s('textContainer', {
            textContainer_withIconRightAndSubText: icon && !iconLeft,
            textContainer_withIconLeftAndSubText: icon
          })}
        >
          <span className={s('text')}>{text}</span>
        </span>
        {icon && getButtonIcon()}
      </span>
    );
  };
  /**
   * If button is of type link
   */
  if (internalHref) {
    return (
      <Link route={internalHref}>
        <a className={BUTTON_CLASSES}>{getInnerMarkup()}</a>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={BUTTON_CLASSES}
        href={href}
        target="_BLANK"
        rel="noopener noreferrer"
      >
        {getInnerMarkup()}
      </a>
    );
  }
  /**
   * If button is of type button
   */
  return (
    <button
      className={BUTTON_CLASSES}
      onClick={!loading ? onClickCallback : () => null}
    >
      {getInnerMarkup()}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf([BUTTON_COLOR_PRIMARY, BUTTON_COLOR_SECONDARY]),
  outlined: PropTypes.bool,
  size: PropTypes.oneOf([
    BUTTON_SIZE_SMALL,
    BUTTON_SIZE_MEDIUM,
    BUTTON_SIZE_LARGE
  ]).isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.func
  ]),
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  onClickCallback: PropTypes.func,
  icon: PropTypes.string,
  iconLeft: PropTypes.bool,
  InjectedNavLink: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  href: PropTypes.string,
  internalHref: PropTypes.string,
  loading: PropTypes.bool,
  skeleton: PropTypes.bool
};

export default Button;
