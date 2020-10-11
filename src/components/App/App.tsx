import * as React from 'react'
import { Router } from '@reach/router'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'
import { Box, BoxProps } from '@material-ui/core'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { RouteComponentProps } from '@reach/router'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Characters from '../Characters/Characters'
import Events from '../Events/Events'
import Comics from '../Comics/Comics'
import Creators from '../Creators/Creators'
import Series from '../Series/Series'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: red[700]
    }
  }
})

theme = responsiveFontSizes(theme)

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      staleTime: 5 * 60 * 1000
    }
  }
})

const Wrapper: React.FC<RouteComponentProps & BoxProps> = (props) => <Box {...props} />

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Router basepath={process.env.PUBLIC_URL}>
          <Layout path="/">
            <Home path="/" />
            <Wrapper path="/" p={theme.spacing(0.3)}>
              <Characters path="characters" />
              <Events path="events" />
              <Comics path="comics" />
              <Creators path="creators" />
              <Creators path="stories" />
              <Series path="series" />
            </Wrapper>
          </Layout>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}

export default App
