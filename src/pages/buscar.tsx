import React, { useEffect, useState } from 'react'
import { Center, Stack, Image, Grid, Link } from '@chakra-ui/react'
import Header from '../components/Header'
import { useRouter } from 'next/router'

const ListBooks = () => {
  const router = useRouter()
  const [books, setBooks] = useState(null)
  const { search } = router.query

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`).then(async (response) => {
      const data = await response.json()
      setBooks(data.items)
    })
  }, [search])

  if (!books) {
    return (<h1>carregando</h1>)
  }

  return (
    <Stack backgroundColor='yellow.personal' minHeight={'100vh'}>
      <Header/>
        <Grid gap={4} templateColumns="repeat(auto-fit, minmax(180px, 1fr))" width={'98vw'}>
          {books && books.map(book => {
            return (
              <Center key={book.id}>
                <Link href={'/'}>
                  <Image width={'auto'} height={'auto'} src={book.volumeInfo.imageLinks?.thumbnail}/>
                </Link>
              </Center>
            )
          })}
        </Grid>
    </Stack>
  )
}

export default ListBooks
