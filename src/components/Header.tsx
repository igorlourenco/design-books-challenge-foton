import React from 'react'
import {
  Box,
  Heading,
  Link,
  Stack, StackProps
} from '@chakra-ui/react'

import { BiBook } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'

interface HeaderProps extends StackProps{
  isBookPage?: boolean
}

const Header = (props: HeaderProps) => {
  return (
    <Stack
      paddingY={3}
      paddingX={5}
      spacing={2}
      isInline
      backgroundColor={'yellow.personal'}
      alignItems="center"
      justifyContent="space-between"
      {...props}
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
          <Box size={32} as={props.isBookPage ? HiOutlineSearch : BiBook}/>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Header
