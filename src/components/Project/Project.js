import React from 'react';
import { Link } from 'routes';

import { pluckImageUrl } from 'utils/selectors/projects';
import { truncateText } from 'utils/helpers/strings';

import classNames from 'classnames/bind';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project }) => {
  const imageUrl = pluckImageUrl(project.image);

  return (
    <li className={s({ container: true })}>
      <div className={s('column')}>
        <h4> {project.title}</h4>
        <p>
          {truncateText({ maxLength: 300, text: project.content })}
          <Link route={`/projekt/${project.slug}/`}>
            <a className={s({ inlineLink: true })}>Läs mer</a>
          </Link>
        </p>
        {project.link && (
          <a target="_BLANK" href={project.link} rel="noreferrer">
            {project.link}
          </a>
        )}
      </div>
      <div className={s('column')}>
        <picture className={s('picture')}>
          <img
            src={'static/images/macbook.png'}
            alt="macbook"
            className={s('macbook')}
          />
          {imageUrl && (
            <img
              src={`${imageUrl}?w=500`}
              alt={project.imageAlt}
              className={`${s('portfolioImage')} lazyload`}
            />
          )}
        </picture>
      </div>
    </li>
  );
};

export default Project;
