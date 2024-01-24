import * as S from './styled'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import PreviousPageButton from '../../components/PreviousPageButton'

export default function Edit() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    const fetchBook = async() => {
      try {
        const response = await fetch(`http://localhost:5555/books/${id}`)
        const result = await response.json()

        setTitle(result.title)
        setAuthor(result.author)
        setPublishedYear(result.publishedYear)

        setLoading(false)
      } catch(error) {
        setLoading(false)
        alert('Error!')
        console.log(error)
      }
    }

    fetchBook()
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishedYear
    }

    setLoading(true)

    fetch(`http://localhost:5555/books/${id}`, {
      method: 'PUT',
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
    <S.Edit>
      <PreviousPageButton />
      <div className="container">
        <h2>Edit a Book!</h2>
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
          <button onClick={handleEditBook}>Edit &</button>
        </div>
      </div>
    </S.Edit>
  )
}