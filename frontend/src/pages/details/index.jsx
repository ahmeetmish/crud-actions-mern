import * as S from './styled'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PreviousPageButton from '../../components/PreviousPageButton.jsx'

export default function Details() {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    const fetchBook = async() => {
      try {
        const response = await fetch(`http://localhost:5555/books/${id}`)
        const result = await response.json()

        setBook(result)
        setLoading(false)
      } catch(error) {
        console.log(error)
      }
    }

    fetchBook()
  }, [])

  return (
    <S.Details>
      <PreviousPageButton />
      <div className="container">
        {loading ? (
          <span>Loading Data..</span>
        ) : (
          <div className="content">
            <span><h3>id:</h3>{book._id}</span>
            <span><h3>title:</h3>{book.title}</span>
            <span><h3>author:</h3>{book.author}</span>
            <span><h3>published year:</h3>{book.publishedYear}</span>
            <span><h3>created time:</h3>{new Date(book.createdAt).toString()}</span>
          </div>
        )}
      </div>
    </S.Details>
  )
}