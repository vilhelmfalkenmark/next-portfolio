import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import EntryPoint from 'hocs/EntryPoint';
import { path, is, isEmpty } from 'ramda';
import {
  fetchProjectById,
  projectByIdAlreadyInStore
} from 'store/projects/projectsActions';
import Hero from 'components/Hero';
import { getLazyImages } from 'utils/selectors/images';

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
    const { projects } = this.props;

    return (
      <main className={s({ container: true })}>
        <Hero
          imageData={{
            lazyImages: getLazyImages({
              imageUrl: projects.projectById.imageUrl,
              imageSizes: {
                defaultParams: { w: '2000' },
                responsiveSizes: [
                  { viewPort: '480px', imageParams: { w: '480' } },
                  { viewPort: '768px', imageParams: { w: '768' } },
                  { viewPort: '1000px', imageParams: { w: '1000' } }
                ],
                maxWidth: true
              }
            })
          }}
        />
        <article className={s('content')}>
          <p>{projects.projectById.content}</p>
        </article>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

ProjectDetailsPage.propTypes = {
  projects: PropTypes.shape({})
};

export default EntryPoint(connect(mapStateToProps)(ProjectDetailsPage));
