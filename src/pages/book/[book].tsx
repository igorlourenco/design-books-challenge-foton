import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, IconButton, Stack, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import Loading from '../../components/Loading'

const Book = () => {
  const router = useRouter()
  const { book } = router.query
  const [myBook, setMyBook] = useState()

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${book}`).then(async (response) => {
      const data = await response.json()
      console.log(data)
      setMyBook(data)
    })
  }, [book])

  if (!myBook) {
    return (<Loading/>)
  }

  if (myBook) {
    console.log(myBook)
    return (
        <Stack>
          <Stack padding={[4, 4, 12, 12]} backgroundColor={'yellow.personal'}>
            <Stack>
              <Stack isInline spacing={8} justifyContent={'center'} width={'100%'}>
                <Image src={myBook?.volumeInfo?.imageLinks.thumbnail} height="200px" width="170px"/>
                <Stack spacing={2}>
                  <Text fontWeight={'bold'} fontSize={'lg'}>{myBook?.volumeInfo?.title}</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>by {myBook?.volumeInfo?.authors.map(author => author)}</Text>
                  <Stack spacing={2} isInline>
                    <Text>R$ {myBook?.saleInfo?.retailPrice.amount}</Text>
                    <Stack spacing={2} isInline>
                      <Box as={AiFillStar}/>
                      <Box as={AiFillStar}/>
                      <Box as={AiFillStar}/>
                      <Box as={AiFillStar}/>
                      <Box as={AiFillStar}/>
                    </Stack>
                  </Stack>
                  <Divider/>
                  <Text fontSize={'xs'} fontWeight={'bold'} color={'gray.700'}>162 likes</Text>
                  <Text fontSize={'xs'} color={'gray.700'}>Marcado como favorito</Text>
                </Stack>
              </Stack>
              <Stack
                  spacing={2}
                  paddingX={[0, 0, 10, 10]}
                  isInline
                  alignItems="center"
                  width={'100%'}
                  justifyContent={{ base: 'space-between' }}
              >
                <Text fontWeight={'bold'}>{myBook?.volumeInfo?.pageCount} pages</Text>
                <Stack spacing={2} isInline>
                  <Button variant="solid" size="md" colorScheme={'blue'} borderRadius={'25px'} paddingX={4}>
                    Like
                  </Button>
                  <IconButton aria-label="icon" borderRadius={'50%'} colorScheme={'pink'} icon={<Box as={BiHeart}/>} size="md"/>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack width={'100%'} padding={3} alignItems={'center'}>
              <Text textAlign={'justify'} width={['95vw', '80vw', '70vw', '70vw']}>
                {myBook?.volumeInfo?.description}
              </Text>
          </Stack>
        </Stack>
    )
  }
}

export default Book
