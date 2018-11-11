import React from 'react';
import { Link } from 'routes';

import { truncateText } from 'utils/helpers/strings';

import classNames from 'classnames/bind';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project, even }) => {
  return (
    <li className={s('container')}>
      <div className={s('column')}>
        <h4> {project.title}</h4>
        <p>
          {truncateText({ maxLength: 300, text: project.content })}
          <Link route={`/projekt/${project.slug}/?id=${project.id}`}>
            <a className={s({ inlineLink: true })}>Läs mer</a>
          </Link>
        </p>
        {project.link && (
          <a target="_BLANK" href={project.link} rel="noreferrer">
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

export default Project;
