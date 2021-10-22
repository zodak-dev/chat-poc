import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'inter-ui/inter.css';

import Store from './redux';
import {checkLocalCredentials} from './redux/user/user.actions';

import Global from './components/global';
import Views from './views';

Store.dispatch(checkLocalCredentials());

ReactDOM.render(
	<React.StrictMode>
		<Global />
		<Provider store={Store}>
			<Views />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);