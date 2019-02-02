import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { isArrayWithContent } from 'utils/helpers/arrays';
import { fetchExperiences } from 'store/experiences/experiencesActions';
import Experience from 'components/Experience/Experience';
import styles from './ExperiencesPage.scss';

const s = classNames.bind(styles);

class ExperiencesPage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    if (req) {
      return (await reduxStore.dispatch(fetchExperiences())) || {};
    }
    return {};
  }

  componentDidMount() {
    const { experiences } = this.props;

    if (experiences.fulfilled === false) {
      this.props.fetchExperiences();
    }
  }

  getMarkup() {
    const { experiences } = this.props;

    /**
     * FULFILLED
     */
    if (experiences.fulfilled && isArrayWithContent(experiences.data)) {
      return (
        <ul>
          {experiences.data.map(experience => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </ul>
      );
    }

    /**
     * REJECTED
     */
    if (experiences.rejected) {
      return (
        <ul>
          <li>ERROR!</li>
        </ul>
      );
    }

    /**
     * FETCHING
     */
    return (
      <ul>
        <li>HÄMTAR!</li>
      </ul>
    );
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
  experiences: state.experiences
});

const mapDispatchToProps = dispatch => ({
  fetchExperiences: () => {
    dispatch(fetchExperiences());
  }
});

ExperiencesPage.propTypes = {
  experiences: PropTypes.shape({
    fetching: PropTypes.bool,
    rejected: PropTypes.bool,
    fulfilled: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  fetchExperiences: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperiencesPage);
