import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_SIZE_MEDIUM
} from 'utils/constants/buttonTypes';
import { truncateText } from 'utils/helpers/strings';
import Button from 'components/Button/Button';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project, even, openProjectModal }) => {
  return (
    <li className={s('container')}>
      {/* INFORMATION COLUMN */}
      <div
        className={s('column', {
          column_info: true
        })}
      >
        <h4> {project.title}</h4>
        <p>{truncateText({ maxLength: 300, text: project.content })}</p>
        <div className={s('buttonContainer')}>
          <Button
            onClickCallback={() => openProjectModal(project)}
            color={BUTTON_COLOR_PRIMARY}
            text={'Läs mer'}
            size={BUTTON_SIZE_MEDIUM}
          />
        </div>
      </div>
      {/* IMAGE COLUMN */}
      <div
        className={s('column', {
          column_image: true
        })}
      >
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
  even: PropTypes.bool,
  openProjectModal: PropTypes.func
};

export default Project;
