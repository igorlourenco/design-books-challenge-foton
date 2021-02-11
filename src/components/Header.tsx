import React from 'react'
import {
  Box,
  Heading,
  Link,
  Stack
} from '@chakra-ui/react'

import SearchHeader from './SearchHeader'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  return (
    <Stack
      paddingY={3}
      paddingX={5}
      spacing={2}
      isInline
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        display="flex"
        justifyContent="center"
        alignItems="center"
        size={'lg'}
        fontWeight="medium"
      >
        Design Books
      </Heading>

      <Stack>
        <Link display={['block', 'block', 'none', 'none']} href={'/search'}>
          <Box size={32} as={AiOutlineSearch}/>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Header
