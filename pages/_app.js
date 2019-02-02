import App, { Container } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import WithReduxStore from 'hocs/WithReduxStore';
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';

import { Provider } from 'react-redux';

import 'styles/main.scss';

const routerConfig = require('router/config');

const routesToArray = Object.keys(routerConfig).map(
  route => routerConfig[route]
);

class PortfolioApp extends App {
  getTitle() {
    if (routesToArray.length) {
      let i = 0;
      while (i < routesToArray.length) {
        if (routesToArray[i].routePattern === this.props.router.asPath) {
          return `${routesToArray[i].pageTitle} | Vilhelm Falkenmark`;
        }
        i++;
      }
    }

    return 'Vilhelm Falkenmark';
  }

  getMetaData() {
    if (routesToArray.length) {
      let i = 0;
      while (i < routesToArray.length) {
        if (routesToArray[i].routePattern === this.props.router.asPath) {
          return `${routesToArray[i].metaData}`;
        }
        i++;
      }
    }
    return '';
  }

  componentDidUpdate() {
    document.getElementById('__next').scrollTo(0, 0);
  }

  render() {
    const { Component, reduxStore } = this.props;

    return (
      <Container>
        <Head>
          <link
            rel="Ville icon"
            type="image/png"
            href="/static/images/ville.ico"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={this.getMetaData()} />
          <title>{this.getTitle()}</title>
        </Head>
        <Provider store={reduxStore}>
          <div id="app">
            <Header />
            <Component />
            <Footer />
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withRouter(WithReduxStore(PortfolioApp));
