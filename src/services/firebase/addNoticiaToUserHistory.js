import { collection, addDoc } from 'firebase/firestore'

export const addNoticiaToUserHistory = async ({
  db,
  userEmail,
  title,
  url,
  description,
  source,
  author,
  urlToImage,
}) => {
  const docRef = await addDoc(collection(db, userEmail), {
    title,
    url,
    description,
    source,
    author,
    urlToImage,
    date: Date.now(),
  })
  if (!docRef.id) return null
  return {
    db,
    userEmail,
    title,
    url,
    description,
    source,
    author,
    urlToImage,
  }
}
