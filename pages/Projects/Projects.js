import classNames from 'classnames/bind';
import { withRouter } from 'next/router';
import EntryPoint from 'hocs/EntryPoint';
import styles from './Projects.scss';

const s = classNames.bind(styles);
const Projects = () => (
  <main className={s('container')}>Välkommen till riktiga projekt!</main>
);

export default withRouter(EntryPoint(Projects));
