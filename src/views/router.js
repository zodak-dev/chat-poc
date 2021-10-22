import {Redirect} from 'raviger';

import SignIn from './sign-in';
import Chat from './chat';

const Router = {
	'/': () => <Redirect to="/sign-in" />,
	'/sign-in': () => <SignIn />,
	'/chat': () => <Chat />
};

export default Router;