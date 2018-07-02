import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withScriptjs,
} from 'react-google-maps';
// import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Light from '../../assets/theme/DefaultTheme';


const Field = styled(TextField)`
 label {
   color: white;
   :after {
    background-color: white;
   color: white;
    }
  :before {
      background-color: white;
   color: white;
      
  }
 }

  width: 230px;

  :after {
    background-color: white;
  }

  margin-bottom: 24px;
`;

const Form = styled.form`
 label {
   color: white;
 }
 width: 232px !important;
 :after {
    background-color: white;
   color: white;
 }
  :before {
    background-color: white;
    color: white;
  }
`;

const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places';

const SearchBox = compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places,
          });
        },
      });
    },
    componentWillReceiveProps(nextProps) {
      this.props.handle(nextProps.lat, nextProps.lng);
    },
  }),
  withScriptjs
)(() =>
  (<div data-standalone-searchbox="">
    <MuiThemeProvider theme={Light}>
      <Form noValidate autoComplete="off">
        <Field
          id="name"
          label="Insira seu destino"
          placeholder="MASP SP"
          margin="normal"
        />
      </Form>
    </MuiThemeProvider>
  </div>)
);

export default SearchBox;
