import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import Particles from 'react-particles-js';
import styles from './StartPage.scss';

const s = classNames.bind(styles);

class StartPage extends React.Component {
  // eslint-disable-next-line
  static getInitialProps({ reduxStore, req }) {
    return {};
  }

  render() {
    return (
      <main className={s('container')}>
        <section className={s('hero')}>
          <h1 className={s('name')}>Vilhelm Falkenmark</h1>
          <div className={s('particles')}>
            <Particles
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: '#fff',
                      blur: 5
                    }
                  }
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 4,
                top: 0,
                left: 0
              }}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default connect()(EntryPoint(StartPage));
