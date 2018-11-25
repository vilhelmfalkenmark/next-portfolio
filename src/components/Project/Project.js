import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import {
  // BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY,
  BUTTON_SIZE_MEDIUM

  // ICON_ARROW
} from 'utils/constants/buttonTypes';

import { truncateText } from 'utils/helpers/strings';

import classNames from 'classnames/bind';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project, even }) => {
  return (
    <li className={s('container')}>
      <div className={s('column')}>
        <h4> {project.title}</h4>
        <p>{truncateText({ maxLength: 300, text: project.content })}</p>
        <Button
          href={`/projekt/${project.slug}/?id=${project.id}`}
          color={BUTTON_COLOR_SECONDARY}
          text={'Läs mer snälla'}
          outlined
          size={BUTTON_SIZE_MEDIUM}
        />
        {project.link && (
          <a target="_BLANK" rel="noopener noreferrer" href={project.link}>
            {project.link}
          </a>
        )}
        {project.stack && (
          <ul className={s('stackList')}>
            {project.stack.map((st, index) => (
              <li className={s('stackItem')} key={index}>
                {st.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={s('column')}>
        <picture
          className={s('picture', {
            picture_even: even
          })}
        >
          <img
            src={'static/images/macbook.png'}
            alt="macbook"
            className={s('macbook')}
          />
          {project.imageUrl && (
            <img
              src={`${project.imageUrl}?w=500`}
              alt={project.imageAlt}
              className={`${s('portfolioImage')} lazyload`}
            />
          )}
        </picture>
      </div>
    </li>
  );
};

Project.propTypes = {
  project: PropTypes.shape({}),
  even: PropTypes.bool
};

export default Project;
