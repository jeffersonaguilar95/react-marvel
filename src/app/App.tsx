import * as React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './Layout/Layout'

const Home = (props: RouteComponentProps) => <div>Home</div>
const Dash = (props: RouteComponentProps) => <div>Dash</div>

const theme = createMuiTheme()

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router basepath={process.env.PUBLIC_URL}>
          <Home path="/" />
          <Dash path="dashboard" />
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
