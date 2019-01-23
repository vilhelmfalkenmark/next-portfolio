import React from 'react';
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';

export default function(EntryPoint) {
  return class extends React.Component {
    static getInitialProps(ctx) {
      return EntryPoint.getInitialProps(ctx);
    }
    componentDidMount() {
      /**
       * Always scroll to top on route change
       */
      document.getElementById('__next').scrollTo(0, 0);
    }
    render() {
      return (
        <div id="app">
          <Header />
          <EntryPoint />
          <Footer />
        </div>
      );
    }
  };
}
