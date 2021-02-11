import { extendTheme } from '@chakra-ui/react'

const colors = {
  yellow: {
    personal: '#FFE205'
  }
}

const fonts = {
  heading: '\'Raleway\', sans-serif',
  body: '\'Raleway\', sans-serif',
  mono: '\'Menlo\', monospace'
}

const theme = extendTheme({ colors, fonts })

export default theme
