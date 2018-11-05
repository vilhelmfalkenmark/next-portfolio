import App, { Container } from 'next/app';
import React from 'react';
import WithReduxStore from 'hocs/WithReduxStore';
import { Provider } from 'react-redux';
import 'styles/main.scss';

if (typeof window !== 'undefined') {
  require('lazysizes');
}

class PortfolioApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default WithReduxStore(PortfolioApp);
