// e.g. src/Chakra.js
// a) import `ChakraProvider` component as well as the storageManagers
import {
  ChakraProvider,
  extendTheme,
  type StyleFunctionProps,
  type ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React from 'react'
import { mode } from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  tooltip: {
    bg: 'red',
  },
  brand: {
    900: '#E0B31C',
    800: '#F0D722',
    700: '#ff00ff',
  },
  bvg0: '#f0d722',
  bvgBg: '#373632',
  // #f0d722
  berlin0: '#E0B31C',

  berlin: {
    50: '#fff8dd',
    100: '#f8e9b5',
    200: '#f2da8b',
    300: '#ebcb5e',
    400: '#e5bd33',
    500: '#cca31a',
    600: '#9f7f11',
    700: '#715b09',
    800: '#453601',
    900: '#1a1200',
  },

  error: 'red.500',
  success: 'green.500',
}

export const monoFont =
  "'JetBrains Mono', Consolas, 'Liberation Mono', Courier, monospace"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export const theme: Dict = extendTheme(
  {
    // styles: {
    // global: (props) => ({
    //   body: {
    //     bg: mode('#fff', colors.bvgBg)(props),
    //   },
    // }),
    // },
    fonts: {
      heading: monoFont,
      mono: monoFont,
    },
    shadows: {
      // outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
      outline: '0 0 0 3px RGBA(224,179,28,0.5)',
    },
    colors,
    config,
    components: {
      Tooltip: {
        baseStyle: {
          bg: colors.berlin0 + 'ee',
          opacity: 0.6,
          '--popper-arrow-bg': colors.berlin0,
        },
        defaultProps: {
          opacity: 0.6,
          openDelay: 1500,
        },
      },
      Code: {
        baseStyle: {
          fontFamily: monoFont,
        },
      },
      Popover: {
        baseStyle: {
          content: {
            bg: '#fff7',
            _dark: {
              bg: '#1115',
            },
            backdropFilter: 'blur(10px)',
          },
        },
      },
      Slider: {
        baseStyle: {
          filledTrack: {
            bg: colors.berlin0,
          },
        },
      },
      Switch: {
        baseStyle: {
          track: {
            _checked: {
              bg: colors.berlin0,
            },
          },
        },
      },
      Link: {
        baseStyle: {
          color: colors.berlin0,
          _dark: {
            color: colors.bvg0,

            fontWeight: 'inherit',
          },
          // fontWeight: 'bold',
          // bg: '#fff2',
          // textShadow: '0 0 2px #fff',
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            _checked: {
              bg: colors.berlin0,
            },
          },
        },
      },
      Button: {
        defaultProps: {
          // bg: 'transparent',
          // background: 'transparent',
          // colorScheme: 'transparent',
          // backgroundColor: 'transparent',
          // background: 'red',
          // colorScheme: 'red',
          // backgroundColor: 'red',
        },
      },
      Modal: {
        baseStyle: (props: StyleFunctionProps) => {
          return {
            overlay: {
              bg: '#0003',
              // backdropBlur: '10px',
            },
            dialog: {
              bg: mode('#fff8', '#222a')(props),
              backdropFilter: 'brightness(1.2) blur(10px)',
            },
            dialogContainer: {
              // bg: mode('red', 'green')(props),
              bg: '#0002',
              // backdropFilter: 'blur(10px) brightness(2.5)',
            },
          }
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'berlin',
    components: [
      'Breadcrumb',
      'Breadcrumbs',
      'Checkbox',
      'Tabs',
      // 'Switch'
    ],
  }),
  //
  // withDefaultProps({
  //   defaultProps: {
  //     variant: 'outline',
  //     size: 'lg',
  //     bg: 'berlin.500',
  //   },
  //   components: ['Tooltip'],
  // }),
)

export const Chakra: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // b) Pass `colorModeManager` prop

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

// also export a reusable function getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies: req.headers.cookie ?? '',
  },
})
