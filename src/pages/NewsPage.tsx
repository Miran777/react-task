import { useState, useEffect } from 'react'
import { getNews } from '../components/fetchNews'



export const NewsPage = () => {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    getNews('https://jsonplaceholder.typicode.com/posts')
    .then(json => {
      setNews(json)
      return news
    })
  }, [news])
  

  return (
    <div>
      {news &&
        news.map(post => <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>)
      }
    </div>
  )
}