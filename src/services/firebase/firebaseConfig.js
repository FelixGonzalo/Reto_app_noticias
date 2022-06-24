import { config } from '../../config'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = config.firebaseConfig
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
