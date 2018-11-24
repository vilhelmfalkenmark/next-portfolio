import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function(EntryPoint) {
  return class extends React.Component {
    static getInitialProps(ctx) {
      return EntryPoint.getInitialProps(ctx);
    }
    render() {
      return [
        <Header key={1} />,
        <EntryPoint key={2} {...this.props} />,
        <Footer key={3} />
      ];
    }
  };
}
