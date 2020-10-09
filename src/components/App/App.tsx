import * as React from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import Layout from '../Layout/Layout'
import Characters from '../Characters/Characters'

const theme = createMuiTheme()

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
          </Layout>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}

export default App
