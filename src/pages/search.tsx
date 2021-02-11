import React, { useEffect, useState } from 'react'
import { Center, Stack, Image, Grid, Link, Heading } from '@chakra-ui/react'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Search from '../components/Search'
import Loading from '../components/Loading'

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
    return (<Loading/>)
  }

  if (!search) {
    return (
      <Stack backgroundColor='yellow.personal' minHeight={'100vh'}>
        <Stack justifyContent="center" alignItems="center" height={'80vh'} spacing={8}>
          <Heading width={['95%', '80%', '70%', '50%']} textAlign={'center'}>
            Find, save and buy books on the biggest database ever!
          </Heading>
          <Search/>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack backgroundColor='yellow.personal' minHeight={'100vh'}>
      <Header/>
      <Stack spacing={4} justifyContent="center" alignItems="center">
        <Search/>
        <Grid marginTop={8} gap={4} templateColumns="repeat(auto-fit, minmax(180px, 1fr))" width={'98vw'}>
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
    </Stack>
  )
}

export default ListBooks
