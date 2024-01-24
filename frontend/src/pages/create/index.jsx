import * as S from './styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PreviousPageButton from '../../components/PreviousPageButton'

export default function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishedYear
    }

    setLoading(true)

    fetch('http://localhost:5555/books', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setLoading(false)
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      alert('Error!')
      console.log(error)
    })
  }

  return (
    <S.Create>
      <PreviousPageButton />
      <div className="container">
        <h2>Create a Book!</h2>
        {loading ? <span>Loading..</span> : ''}
        <div className="action">
          <div>
            <label htmlFor="title">title</label>
            <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" id='title' />
          </div>
          <div>
            <label htmlFor="title">author</label>
            <input onChange={(event) => setAuthor(event.target.value)} value={author} type="text" id='title' />
          </div>
          <div>
            <label htmlFor="title">published year</label>
            <input onChange={(event) => setPublishedYear(event.target.value)} value={publishedYear} type="text" id='title' />
          </div>
          <button onClick={handleCreateBook}>Add +</button>
        </div>
      </div>
    </S.Create>
  )
}