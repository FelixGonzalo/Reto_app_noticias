export const config = {
  newsApi: {
    API_KEY: process.env.REACT_APP_NEWS_API_KEY,
    API_URL: 'https://newsapi.org/v2',
  },
  authARC: {
    API_URL: 'https://api-sandbox.elcomercio.pe/identity/public/v1',
  },
  firebaseConfig: {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
  },
}
