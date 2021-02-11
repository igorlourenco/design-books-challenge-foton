import React, { useState } from 'react'
import { Box, Stack, Input, Button } from '@chakra-ui/react'
import { BiBook } from 'react-icons/bi'

const Search = () => {
  const [searchWord, setSearchWord] = useState('')

  const handleChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <Stack spacing={4} justifyContent="center" alignItems="center" width={['100%', '80%', '80%', '60%']}>
      <Input placeholder="Search..." borderColor={'black'} onChange={handleChangeSearchWord}/>
      <Button as={'a'} href={`/search?search=${searchWord}`} leftIcon={<Box as={BiBook}/>} variant="outline"
              backgroundColor={'yellow.personal'}
              borderColor={'black'} size="md" _hover={{
                backgroundColor: 'yellow.300'
              }}>
        Find books
      </Button>
    </Stack>
  )
}

export default Search
