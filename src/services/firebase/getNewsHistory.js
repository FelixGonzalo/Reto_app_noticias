import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'

export const getNewsHistory = async ({ db, userEmail, numLimit = 10 }) => {
  const querySnapshot = await getDocs(
    query(collection(db, userEmail), orderBy('date', 'desc'), limit(numLimit))
  )
  const notas = []
  querySnapshot.forEach((doc) => notas.push(doc.data()))
  return notas
}
