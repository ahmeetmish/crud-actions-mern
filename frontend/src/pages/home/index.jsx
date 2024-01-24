import * as S from './styled'

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BiEdit, BiInfoCircle, BiPlusCircle, BiTrashAlt } from "react-icons/bi"

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    const fetchBooks = async() => {
      try {
        const response = await fetch('http://localhost:5555/books')
        const result = await response.json()

        setBooks(result.data)
        setLoading(false)
      } catch(error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <S.Home>
      <div className="container">
        <S.Header>
          <h2>Book List</h2>
          <Link to='/books/create' className='action-add'>
            <BiPlusCircle size={32} />
          </Link>
        </S.Header>
        <S.Content>
          {loading ? (
            <span>Loading Data..</span>
          ) : (
            <div className="books">
              {books.map((book, index) => (
                <div className="book" key={book._id}>
                  <span className='number'>{index + 1}</span>
                  <span><h3>title:</h3>{book.title}</span>
                  <span><h3>author:</h3>{book.author}</span>
                  <span><h3>published:</h3>( {book.publishedYear} )</span>
                  <div className="actions">
                    <Link to={`/books/details/${book._id}`}>
                      <BiInfoCircle />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <BiEdit />
                    </Link>
                    <Link onClick={(event) => {
                      fetch(`http://localhost:5555/books/${book._id}`, { method: 'DELETE' , headers: {
                        'Content-Type': 'application/'
                      }}).then((response) => {
                        if(!response.ok) {
                          throw new Error('Something went wrong!')
                        }
                        
                        navigate('/')
                      }).catch((error) => {
                        console.log(error);
                      })
                    }} to={`/books/delete/${book._id}`}>
                      <BiTrashAlt />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
          }
        </S.Content>
      </div>
    </S.Home>
  )
}