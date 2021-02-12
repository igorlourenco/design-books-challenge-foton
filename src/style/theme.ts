import { extendTheme } from '@chakra-ui/react'

const colors = {
  yellow: {
    personal: '#FFE205'
  }
}

const fonts = {
  heading: '\'Proxima Nova\', sans-serif',
  body: '\'Proxima Nova\', sans-serif',
  mono: '\'Menlo\', monospace'
}

const theme = extendTheme({ colors, fonts })

export default theme
