import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryPoint from 'hocs/EntryPoint';
import styles from './StartPage.scss';

const s = classNames.bind(styles);

class StartPage extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <main className={s('container')}>
        Välkommen till startsidan!
        <img
          data-src={
            'https://playapi.mtgx.tv/imagecache/480x270/cloud/content-images/seasons/19719/season/UM4-0uU3qrp.jpg'
          }
          src={
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
          }
          className={'lazyload'}
        />
      </main>
    );
  }
}

export default connect()(EntryPoint(StartPage));
