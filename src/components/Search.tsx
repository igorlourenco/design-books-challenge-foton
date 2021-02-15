import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Input, Button } from '@chakra-ui/react'
import { BiBook } from 'react-icons/bi'

const Search = () => {
  const searchWordRef = useRef(null)

  const [searchWord, setSearchWord] = useState('')

  const searchOnEnter = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      searchWordRef?.current.click()
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', searchOnEnter)
    return () => document.removeEventListener('keyup', searchOnEnter)
  }, [searchWord])

  const handleChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      width={['95%', '80%', '80%', '60%']}>
      <Input
        focusBorderColor={'yellow.400'}
        borderColor={'black'}
        onChange={handleChangeSearchWord}
      />
      <Button
        ref={searchWordRef}
        as={'a'}
        href={`/search?search=${searchWord}`}
        leftIcon={<Box as={BiBook} />}
        variant="outline"
        backgroundColor={'yellow.personal'}
        borderColor={'black'}
        size="md"
        _hover={{
          backgroundColor: 'yellow.300'
        }}>
        Find books
      </Button>
    </Stack>
  )
}

export default Search
