// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  PART_PANELS_SHEET_ID: '1pcEtB2OfTOXN0ALLutHmIQZohLcVWJcgN1dghjh5o10',
	OPTIMIZATION_URL: 'http://localhost:8080/api/optimizacion',
  // OPTIMIZATION_URL: 'http://mlplak.test/api/optimizacion',
  API_URL: 'http://ml-plak3.test:75/api',
	//API_URL: 'http://staging.mlplak.com/server/api',

	// API_URL: 'https://arcane-ocean-87661.herokuapp.com/api/',
	SOCKET_URL: 'ws://localhost:8080',
	// API_URL: 'http://mlplak.test/api',
	TOKEN_NAME: 'jwt-token',

  // Constantes
  MONITOR_GENERAL_SHEET_ID: '1Em3uTXTJe4fqJbUf8ktDqD1XmsjHz2v1rlVzZ-TEr7w',
  firebase: {
    apiKey: 'AIzaSyBhJqLvWzzm_HBO9JfdRUG8gfE8oZ_sTw4',
    authDomain: 'ml-plak.firebaseapp.com',
    databaseURL: 'https://ml-plak.firebaseio.com',
    projectId: 'ml-plak',
    storageBucket: 'ml-plak.appspot.com',
    messagingSenderId: '102815717154'
  }

};
