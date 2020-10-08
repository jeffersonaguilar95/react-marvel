import * as React from 'react'
import { RouteComponentProps, Router } from '@reach/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from '../Layout/Layout'
import Characters from '../Characters/Characters'

const theme = createMuiTheme()

const Home: React.FC<RouteComponentProps> = (props) => <div>Home</div>

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basepath={process.env.PUBLIC_URL}>
        <Layout path="/">
          <Home default />
          <Characters path="/characters" />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
