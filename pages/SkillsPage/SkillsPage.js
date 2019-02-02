import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { fetchSkills } from 'store/skills/skillsActions';
import styles from './SkillsPage.scss';

const s = classNames.bind(styles);

class SkillsPage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    if (req) {
      return (await reduxStore.dispatch(fetchSkills())) || {};
    }

    return {};
  }

  componentDidMount() {
    if (this.props.skills.fulfilled === false) {
      this.props.fetchSkills();
    }
  }

  getMarkup() {
    const { fetching, fulfilled, data } = this.props.skills;

    if (fetching) {
      return <p>Hämtar data!</p>;
    }

    if (fulfilled && data.length) {
      return (
        <ul>
          {data.map(skill => (
            <li key={skill.id} className={s('skill')}>
              <img src={skill.imageUrl} />
              {skill.title}
            </li>
          ))}
        </ul>
      );
    }

    return <p>Error!</p>;
  }

  render() {
    return (
      <main className={s({ container: true })}>
        <article className={s('content')}>
          <h1 className={s('heading')}>Färdigheter</h1>
          {this.getMarkup()}
        </article>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

const mapDispatchToProps = dispatch => ({
  fetchSkills: () => {
    dispatch(fetchSkills());
  }
});

SkillsPage.propTypes = {
  skills: PropTypes.shape({
    fetching: PropTypes.bool,
    rejected: PropTypes.bool,
    fulfilled: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape())
  }),
  fetchSkills: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsPage);
