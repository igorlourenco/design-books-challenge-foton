import React, { useState } from 'react'
import { Box, Input, InputGroup, InputRightElement, Link, Stack, StackProps } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchHeader = (props: StackProps) => {
  const [searchWord, setSearchWord] = useState()

  const handleChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <Stack spacing={2} isInline alignItems="center" {...props}>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<Box size={32} as={AiOutlineSearch} color={'gray.500'}/>}
        />
        <Input borderColor={'black'} placeholder={'Search...'} onChange={handleChangeSearchWord}/>
      </InputGroup>

    </Stack>
  )
}

export default SearchHeader
