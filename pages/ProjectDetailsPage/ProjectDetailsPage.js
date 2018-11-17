import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import { path, is, isEmpty } from 'ramda';
import {
  fetchProjectById,
  projectByIdAlreadyInStore
} from 'store/projects/projectsActions';

import styles from './ProjectDetailsPage.scss';

const s = classNames.bind(styles);

class ProjectDetailsPage extends React.Component {
  static async getInitialProps({ reduxStore, query, req }) {
    const projectsInStore = path(['projects', 'data'], reduxStore.getState());
    if (is(Array, projectsInStore) && !isEmpty(projectsInStore)) {
      let i = 0;
      while (i < projectsInStore.length) {
        if (projectsInStore[i].id === query.id) {
          return reduxStore.dispatch(
            projectByIdAlreadyInStore(projectsInStore[i])
          );
        }
        i++;
      }
    }
    return reduxStore.dispatch(fetchProjectById(req.url));
  }

  getMarkup() {
    return null;
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <h1 className={s('heading')}>Projektdetaljer!</h1>
        {this.getMarkup()}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default EntryPoint(connect(mapStateToProps)(ProjectDetailsPage));
