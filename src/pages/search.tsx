import React, { useEffect, useState } from 'react'
import { Button, Center, Stack, Image, Grid, Link, Heading, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Search from '../components/Search'
import Loading from '../components/Loading'

const ListBooks = () => {
  const router = useRouter()
  const [books, setBooks] = useState([])
  const { search } = router.query
  const [startIndex, setStartIndex] = useState(0)
  const imagePlaceholder = 'https://via.placeholder.com/120x173?text=Livro+sem+Capa'
  let booksToAppend = []
  const booksPerPage = 30

  const loadMore = () => {
    const newLimit = startIndex + booksPerPage
    setStartIndex(newLimit)
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=${booksPerPage}`).then(async (response) => {
      const data = await response.json()
      booksToAppend = booksToAppend.concat(books, data.items)
      setBooks(booksToAppend)
    })
  }, [search, startIndex])

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
      <Stack spacing={8} justifyContent="center" alignItems="center" paddingY={5}>
        <Search/>
        <Text>You searched for: <Text as={'span'} fontWeight={'bold'}>{search}</Text></Text>
        <Grid paddingTop={10} gap={4} maxWidth={'1024px'} width={'98vw'}
              templateColumns="repeat(auto-fit, minmax(180px, 1fr))">
          {books && books.map((book, index) => {
            return (
              // book component
              <Center key={`${book?.id}-${index}`}>
                <Link href={`/book/${book?.id}`}>
                  <Image width={'auto'} height={'auto'}
                         src={book?.volumeInfo.imageLinks?.thumbnail ?? imagePlaceholder}/>
                </Link>
              </Center>
            )
          })}
        </Grid>
        <Button onClick={loadMore} backgroundColor={'yellow.300'} variant={'ghost'} borderColor={'black'} size="md"
                _hover={{
                  backgroundColor: 'yellow.300'
                }}>
          Load more books
        </Button>
      </Stack>
    </Stack>
  )
}

export default ListBooks
