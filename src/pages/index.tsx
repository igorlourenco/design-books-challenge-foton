import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from '../components/Header'

const App = () => {
  return (
    <Stack backgroundColor='yellow.personal' minWidth={'100vw'} minHeight={'100vh'}>
      <Header/>
    </Stack>
  )
}

export default App
