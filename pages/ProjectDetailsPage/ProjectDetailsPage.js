import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import { fetchProjects } from 'store/projects/actions';

import styles from './ProjectDetailsPage.scss';

const s = classNames.bind(styles);

class ProjectDetailsPage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    return {};
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

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  }
});

export default EntryPoint(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectDetailsPage)
);
