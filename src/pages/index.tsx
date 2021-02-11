import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import Header from '../components/Header'
import Search from '../components/Search'

const App = () => {
  return (
    <Stack backgroundColor='yellow.personal' minWidth={'100vw'} minHeight={'100vh'}>
      <Header/>
      <Stack justifyContent="center" alignItems="center" height={'80vh'} spacing={8}>
        <Heading width={['95%', '80%', '70%', '50%']} textAlign={'center'}>
          Find, save and buy books on the biggest database ever!
        </Heading>
        <Search/>
      </Stack>
    </Stack>
  )
}

export default App
