import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Logo from '../src/images/logo_app.png';
import MapDirections from '../MapDirections';
import Home from '../Home';
import GetBike from '../GetBike';
import Summary from '../Summary';
import CarbonCoins from '../CarbonCoins';
import CarbonCoinsMine from '../CarbonCoins/Me';
import theme from './assets/theme/DefaultTheme';
import Rewards from "../Rewards";
// import BurguerMenu from './components/BurguerMenu';
// import Rewards from "../Rewards";
import BurguerMenu from './components/BurguerMenu'

const Router = styled(BrowserRouter)`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <BurguerMenu />
            <img src={Logo} style={{
                height: '31px', 
                width: '42px', 
                position: 'absolute', 
                right: '24px', 
                top: '24px',
                background: 'none',
              }}
            />
            <Route exact path="/" component={Home} />
            <Route path="/map" component={MapDirections} />
            <Route path="/get-bike" component={GetBike} />
            <Route path="/summary" component={Summary} />
            <Route path="/carbon-coins" component={CarbonCoins} />
            <Route path="/carbon-coins-me" component={CarbonCoinsMine} />
            <Route path="/rewards" component={Rewards} />
          </React.Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;