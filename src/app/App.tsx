import React from 'react';
import { Router, RouteComponentProps } from "@reach/router"
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Layout from './Layout/Layout'

let Home = (props: RouteComponentProps) => <div>Home</div>;
let Dash = (props: RouteComponentProps) => <div>Dash</div>;

const theme = createMuiTheme();

function  App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router basepath={process.env.PUBLIC_URL}>
          <Home path="/" />
          <Dash path="dashboard" />
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
