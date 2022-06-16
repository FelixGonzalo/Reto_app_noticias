import { config } from '../../config'

const { API_KEY, API_URL } = config.newsApi

export async function getNewsByCategory({ category, pageSize = 20, page = 1 }) {
  if (!category) return []
  const url = `${API_URL}/top-headlines?category=${category}&pageSize=${pageSize}&page=${page}&language=es&apiKey=${API_KEY}`
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { articles } = res
      if (!Array.isArray(articles)) return []
      return articles
    })
}
