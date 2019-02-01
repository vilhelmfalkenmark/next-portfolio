import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BUTTON_COLOR_PRIMARY,
  BUTTON_SIZE_MEDIUM
} from 'utils/constants/buttonTypes';
import { closeProjectModal } from 'store/projects/projectsActions';
import ModalBase from 'components/modals/ModalBase/ModalBase';
import Button from 'components/Button/Button';
import styles from './ProjectModal.scss';

const s = classNames.bind(styles);

const ProjectModal = ({ project, isOpen, closeProjectModal }) => {
  return (
    <ModalBase
      onCloseCallback={closeProjectModal}
      isOpen={isOpen}
      title={project.title}
    >
      <article className={s('container')}>
        <picture className={s('imageContainer')}>
          <img
            data-src={`${project.imageUrl}?w=800`}
            src={
              'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            }
            alt={project.imageAlt}
            className={`${s('image')} lazyload`}
          />
        </picture>
        <p className={s('content')}>{project.content}</p>
        {project.stack && (
          <div>
            <h3 className={s('stackHeading')}>Använda tekniker</h3>
            <ul className={s('stackList')}>
              {project.stack.map((st, index) => (
                <li className={s('stackItem')} key={index}>
                  {st.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.link && (
          <div className={s('buttonContainer')}>
            <Button
              href={project.link}
              color={BUTTON_COLOR_PRIMARY}
              text={'Till projektet'}
              size={BUTTON_SIZE_MEDIUM}
            />
          </div>
        )}
      </article>
    </ModalBase>
  );
};

const mapStateToProps = state => ({
  isOpen: state.projects.modalIsOpen,
  project: state.projects.modalProject
});

const mapDispatchToProps = dispatch => ({
  closeProjectModal: () => {
    dispatch(closeProjectModal());
  }
});

ProjectModal.propTypes = {
  isOpen: PropTypes.bool,
  closeProjectModal: PropTypes.func,
  project: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectModal);
