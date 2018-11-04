import Header from 'components/Header';

export default function(EntryPoint) {
  return class extends React.Component {
    render() {
      return [<Header key={1} />, <EntryPoint key={2} />];
    }
  };
}
