import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.p`
  color: 'white';
  font-size: 30px;
`;

const Title = ({ msg }) => (
  <TitleWrapper>
    { msg }
  </TitleWrapper>
);


Title.propTypes = {
  msg: PropTypes.string,
};

export default Title;
