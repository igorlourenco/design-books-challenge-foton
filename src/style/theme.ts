import { extendTheme } from '@chakra-ui/react'

const colors = {
  yellow: {
    personal: '#FFE205'
  }
}

const fonts = {
  heading: '\'Lato\', sans-serif',
  body: '\'Lato\', sans-serif',
  mono: '\'Menlo\', monospace'
}

const theme = extendTheme({ colors, fonts })

export default theme
