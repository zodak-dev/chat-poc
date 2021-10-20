import { Redirect } from 'raviger';

import SignIn from './sign-in';

const Router = {
  '/': () => <Redirect to="/sign-in" />,
  '/sign-in': () => <SignIn />
};

export default Router;