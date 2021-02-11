import React from 'react'
import {
  Box,
  Heading,
  Link,
  Stack
} from '@chakra-ui/react'

import { BiBook } from 'react-icons/bi'

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
        <Link href={'/search'}>
          <Box size={32} as={BiBook}/>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Header
