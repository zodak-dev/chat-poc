import axios from 'axios';


const instance = axios.create({
	baseURL: 'http://api.dev.zodak.ch'
});

instance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if (error.response) {
			if (error.response.status === 409) {
				switch (error.response.data) {
					case 'ERROR_EMAIL_DUPLICATION':
						console.error('Cette adresse e-mail est déjà utilisée !');
						break;

					default:
						console.error('je sais pas');
						break;
				}
			}
			if (error.response.status === 401) {
				switch (error.response.data) {
					case 'ERROR_UNAUTHORIZED':
						console.error('Connexion non autorisée !');
						break;

					default:
						console.error('je sais pas');
						break;
				}
			}
		} else {
			console.error(error.message || error.response.data);
		}
		return Promise.reject(error);
	}
);

export default instance;