import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import Project from 'components/Project';
import { fetchProjects } from 'store/projects/actions';

import styles from './ProjectsPage.scss';

const s = classNames.bind(styles);

class ProjectsPage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    return reduxStore.dispatch(fetchProjects(true));
  }

  getMarkup() {
    const { projects } = this.props;

    if (projects.projectsFulfilled && projects.data.length > 0) {
      return (
        <ul className={s({ list: true })}>
          {projects.data.map((project, index) => (
            <Project
              key={project.id}
              project={project}
              even={index % 2 === 0}
            />
          ))}
        </ul>
      );
    } else if (projects.projectsRejected) {
      return <p>Error!</p>;
    }
    return <p>Laddar data!</p>;
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <h1 className={s('heading')}>Alla projekt</h1>
        {this.getMarkup()}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  }
});

export default EntryPoint(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectsPage)
);
