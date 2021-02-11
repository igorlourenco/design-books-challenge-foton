import React, { useState } from 'react'
import {
  Heading,
  Stack,
  Input,
  Button,
  Box,
  Link,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure()

  const [searchWord, setSearchWord] = useState()

  const handleChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <Stack
      padding={3}
      spacing={2}
      isInline
      alignItems="center"
      justifyContent="space-around"
    >
      <Stack>
        <IconButton
          backgroundColor={'transparent'}
          _hover={{ backgroundColor: 'transparent' }}
          color={'#020E35'}
          size={'lg'}
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          icon={isOpen ? <Box size={32} as={HiX}/> : <Box size={32} as={HiMenu}/>}
          aria-label={'Open Menu'}
          onClick={isOpen ? onClose : onOpen}
        />
        {isOpen
          ? <Stack spacing={2} isInline alignItems="center">
              <Input borderColor={'black'} placeholder={'Harry Potter...'}/>
              <Box as={AiOutlineSearch} size={32}/>
            </Stack>

          : null
        }
        <Stack
          spacing={2}
          display={{
            base: 'none',
            md: 'flex'
          }}
          alignItems="space-between"
          justifyContent="space-between"
        >
          <Button leftIcon={<Box as={BiBook}/>} variant="outline" backgroundColor={'yellow.personal'}
                  borderColor={'black'} size="md" _hover={{
                    backgroundColor: 'yellow.300'
                  }}>
            Ver todos os livros
          </Button>
        </Stack>
      </Stack>

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
        <Link display={{ md: !isOpen ? 'none' : 'inherit' }} href={`/buscar?search=${searchWord}`}>
          <Box size={32} as={AiOutlineSearch}/>
        </Link>

        <Stack display={{
          base: 'none',
          md: 'flex'
        }} spacing={2} isInline alignItems="center">
          <Input borderColor={'black'} placeholder={'Harry Potter...'} onChange={handleChangeSearchWord}/>
          <Link display={{ md: !isOpen ? 'none' : 'inherit' }} href={`/buscar?search=${searchWord}`}>
            <Box size={32} as={AiOutlineSearch}/>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Header
