import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import {
  fetchProjects,
  openProjectModal
} from 'store/projects/projectsActions';
import Project from 'components/Project/Project';
import ProjectModal from 'components/modals/ProjectModal/ProjectModal';
import styles from './ProjectsPage.scss';

const s = classNames.bind(styles);

class ProjectsPage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    if (reduxStore.getState().projects.fulfilled === false) {
      return (await reduxStore.dispatch(fetchProjects())) || {};
    }
    return {};
  }

  getMarkup() {
    const { projects, openProjectModal } = this.props;

    if (projects.fulfilled && projects.data.length > 0) {
      return (
        <ul className={s({ list: true })}>
          {projects.data.map((project, index) => (
            <Project
              openProjectModal={openProjectModal}
              key={project.id}
              project={project}
              even={index % 2 === 0}
            />
          ))}
        </ul>
      );
    } else if (projects.rejected) {
      return <p>Error!</p>;
    }
    return <p>Laddar data!</p>;
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <article className={s('content')}>
          <h1 className={s('heading')}>Alla projekt</h1>
          {this.getMarkup()}
        </article>
        <ProjectModal key={this.props.projects.modalProject.id} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  openProjectModal: project => {
    dispatch(openProjectModal(project));
  }
});

ProjectsPage.propTypes = {
  projects: PropTypes.shape({
    fetching: PropTypes.bool,
    rejected: PropTypes.bool,
    fulfilled: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    modalProject: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  openProjectModal: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);
