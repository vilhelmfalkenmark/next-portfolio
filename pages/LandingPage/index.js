import EntryPoint from 'hocs/EntryPoint';
import { withRouter } from 'next/router';

const LandingPage = () => <div>Välkommen till startsidan!</div>;

export default withRouter(EntryPoint(LandingPage));
