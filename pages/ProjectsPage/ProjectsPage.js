import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import styles from './ProjectsPage.scss';

const s = classNames.bind(styles);

const ProjectsPage = () => (
  <main className={s('container')}>Välkommen till mina projekt!</main>
);

export default connect()(EntryPoint(ProjectsPage));
