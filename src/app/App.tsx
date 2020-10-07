import React from 'react';
import { Router, LocationProvider, createHistory, RouteComponentProps } from "@reach/router"
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Layout from './Layout/Layout'

let Home = (props: RouteComponentProps) => <div>Home</div>;
let Dash = (props: RouteComponentProps) => <div>Dash</div>;

const theme = createMuiTheme();

function  App() {
  // @ts-ignore
  const history = createHistory(window);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LocationProvider history={history}>
          <Router>
            <Home path="/" />
            <Dash path="dashboard" />
          </Router>
        </LocationProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
