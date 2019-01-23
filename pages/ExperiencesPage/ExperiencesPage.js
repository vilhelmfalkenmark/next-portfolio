import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { fetchExperiences } from 'store/experiences/experiencesActions';
import EntryPoint from 'hocs/EntryPoint';
import styles from './ExperiencesPage.scss';

const s = classNames.bind(styles);

class ExperiencesPage extends React.Component {
  static async getInitialProps({ reduxStore }) {
    if (reduxStore.getState().experiences.fulfilled === false) {
      return (await reduxStore.dispatch(fetchExperiences())) || {};
    }
    return {};
  }

  getMarkup() {
    return <p />;
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <article className={s('content')}>
          <h1 className={s('heading')}>Erfarenheter</h1>
          {this.getMarkup()}
        </article>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  experiences: state.projects
});

// const mapDispatchToProps = dispatch => ({});

ExperiencesPage.propTypes = {
  experiences: PropTypes.shape({}),
  openProjectModal: PropTypes.func
};

export default EntryPoint(
  connect(
    mapStateToProps
    // mapDispatchToProps
  )(ExperiencesPage)
);
