// Initialize Firebase
import firebase from 'firebase/app'

export const appName = 'react-6b4df'
export const firebaseConfig = {
	apiKey: 'AIzaSyDpTA_3Esm2pjY1XB9KMndLytcrGzJnvjc',
	authDomain: `${appName}.firebaseapp.com`,
	databaseURL: `https://${appName}.firebaseio.com`,
	projectId: `${appName}`,
	storageBucket: `${appName}.appspot.com`,
	messagingSenderId: '1063522882237',
}

firebase.initializeApp(firebaseConfig)

// желательно переименовать этот конфиг в config.js и сделать его общим
