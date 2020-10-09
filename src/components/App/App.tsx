import * as React from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
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
      refetchOnWindowFocus: false
    }
  }
})

const Home: React.FC<RouteComponentProps> = (props) => <div>Home</div>

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Router basepath={process.env.PUBLIC_URL}>
          <Layout path="/">
            <Home default />
            <Characters path="/characters" />
            <Events path="/events" />
            <Comics path="/comics" />
            <Creators path="/creators" />
            <Creators path="/stories" />
            <Series path="/series" />
          </Layout>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}

export default App
