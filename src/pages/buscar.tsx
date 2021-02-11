import React, { useEffect, useState } from 'react'
import { Stack, Image, Grid, Link } from '@chakra-ui/react'
import Header from '../components/Header'

const ListBooks = () => {
  const [books, setBooks] = useState(null)

  const searchWords = [
    'negócios', 'computação', 'design', 'história', 'ciências', 'brasil'
  ]

  useEffect(() => {
    async function getBooks () {
      const randomWordIndex = Math.floor(Math.random() * searchWords.length)
      const searchWord = searchWords.find((_, index) => index === randomWordIndex)
      console.log(searchWord)
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=20`).then(async (response) => {
        const data = await response.json()
        setBooks(data.items)
      })
    }

    getBooks()
  }, [])

  if (!books) {
    return (<h1>carregando</h1>)
  }

  return (
    <Stack backgroundColor='yellow.personal' minWidth={'100vw'} minHeight={'100vh'} padding={2}>
      <Header/>
      <Grid
        justifyItems="Center"
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']}
        gap={[2, 2, 3, 3]}
        p={[2, 2, 3, 3]}>
        {books && books.map(book => {
          return (
            <Link key={book.id} href={'/'}>
              <Image width={'128px'} height={'173px'} src={book.volumeInfo.imageLinks?.thumbnail}/>
            </Link>
          )
        })}

      </Grid>
    </Stack>
  )
}

export default ListBooks
