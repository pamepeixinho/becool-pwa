import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const buttonLabelStyle = {
  color: 'white',
  textDecorationColor: 'white',
  textDecoration: 'underline',
};

const BackButton = ({ backPath, msg }) => (
  <Link to={backPath}>
    <Button>
      <div style={buttonLabelStyle}> {msg || '< voltar'} </div>
    </Button>
  </Link>
);

BackButton.propTypes = {
  backPath: PropTypes.string,
  msg: PropTypes.string,
};

export default BackButton;
