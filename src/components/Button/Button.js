import React from 'react';
import { Link } from 'routes';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SolidSpinner from 'components/Loading/SolidSpinner';

import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY,
  BUTTON_SIZE_SMALL,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_LARGE
  // ICON_ARROW
} from 'utils/constants/buttonTypes';

import styles from './Button.scss';

const s = classNames.bind(styles);

const Button = ({
  href,
  color,
  outlined,
  size,
  text,
  icon,
  iconLeft,
  className,
  // iconClassName,
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
  if (href) {
    return (
      <Link route={href}>
        <a className={BUTTON_CLASSES}>{getInnerMarkup()}</a>
      </Link>
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
  /**
   * Color of button
   */
  color: PropTypes.oneOf([BUTTON_COLOR_PRIMARY, BUTTON_COLOR_SECONDARY]),
  /**
   * If the colors should get inverted.
   */
  outlined: PropTypes.bool,
  /**
   * Size of button
   */
  size: PropTypes.oneOf([
    BUTTON_SIZE_SMALL,
    BUTTON_SIZE_MEDIUM,
    BUTTON_SIZE_LARGE
  ]).isRequired,
  /**
   * The text to be displayed withing the button
   */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.func
  ]),
  /**
   * css-class passed from upper scope
   */
  className: PropTypes.string,
  /**
   * css-class passed to the potential icon
   */
  iconClassName: PropTypes.string,
  /**
   * Non css-modules scoped css class used for GTM tracking, Analytic and so on.
   */
  trackingClassName: PropTypes.string,
  /**
   * The function to be triggered on click
   */
  onClickCallback: PropTypes.func,
  /**
   * The icon to be displayed within button
   */
  icon: PropTypes.string,
  /**
   * If icon should be displayed to the left of the text
   */
  iconLeft: PropTypes.bool,
  /**
   * The react element for handling routing. E.g NavLink from "fluxible-router"
   */
  InjectedNavLink: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * Where the NavLink click should lead to
   */
  href: PropTypes.string,
  /**
   * Used to display a spinner and will disaple pointer-events
   */
  loading: PropTypes.bool
};

export default Button;
