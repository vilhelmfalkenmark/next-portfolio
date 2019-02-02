import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_SIZE_MEDIUM
} from 'utils/constants/buttonTypes';
import { truncateText } from 'utils/helpers/strings';
import Button from 'components/Button/Button';
import SkeletonText from 'components/Loading/SkeletonText/SkeletonText';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project, even, openProjectModal, skeleton }) => {
  return (
    <li className={s('container')}>
      {/* INFORMATION COLUMN */}
      <div
        className={s('column', {
          column_info: true
        })}
      >
        <h3
          className={s('heading', {
            heading_skeleton: skeleton
          })}
        >
          {project.title || ' '}
        </h3>
        {skeleton ? (
          <SkeletonText rows={4} />
        ) : (
          <p>{truncateText({ maxLength: 300, text: project.content })}</p>
        )}
        <div className={s('buttonContainer')}>
          <Button
            skeleton={skeleton}
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
        <h3
          className={s('mobileHeading', {
            mobileHeading_skeleton: skeleton
          })}
        >
          {project.title || ' '}
        </h3>
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
  skeleton: PropTypes.bool,
  openProjectModal: PropTypes.func
};

export default Project;
