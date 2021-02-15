import React from 'react'
import { Heading, Spinner, Stack } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      justifyContent="center"
      width={'100vw'}
      height={'100vh'}
      backgroundColor={'yellow.personal'}>
      <Heading>Loading books...</Heading>
      <Spinner size="xl" />
    </Stack>
  )
}

export default Loading
