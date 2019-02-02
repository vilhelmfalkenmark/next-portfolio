import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { path } from 'ramda';
import { isArrayWithContent } from 'utils/helpers/arrays';
import {
  fetchProjects,
  openProjectModal
} from 'store/projects/projectsActions';
import Project from 'components/Project/Project';
import ProjectModal from 'components/modals/ProjectModal/ProjectModal';
import styles from './ProjectsPage.scss';

const s = classNames.bind(styles);

class ProjectsPage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    if (req) {
      return (await reduxStore.dispatch(fetchProjects())) || {};
    }
    return {};
  }

  componentDidMount() {
    if (this.props.projects.fulfilled === false) {
      this.props.fetchProjects();
    }
  }

  getMarkup() {
    const { projects, openProjectModal } = this.props;

    /**
     * FULFILLED
     */
    if (projects.fulfilled && isArrayWithContent(projects.data)) {
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
    }

    /**
     * REJECTED
     */
    if (projects.rejected) {
      return <p>Error!</p>;
    }

    /**
     * FETCHING
     */
    const r = [...Array(3).keys()];
    return (
      <ul className={s({ list: true })}>
        {r.map((project, index) => (
          <Project skeleton key={index} project={{}} even={index % 2 === 0} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <article className={s('content')}>
          <h1 className={s('heading')}>Alla projekt</h1>
          {this.getMarkup()}
        </article>
        <ProjectModal
          key={path(['projects', 'modalProject', 'id'], this.props)}
        />
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
  },
  fetchProjects: () => {
    dispatch(fetchProjects());
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
  openProjectModal: PropTypes.func,
  fetchProjects: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);
