import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import MenuLinks from './MenuLinks';

const Anchor = styled(Scrollchor)`
  padding: 8px;
  text-decoration: none;
  color: #5E0D61;
  font-weight: 300;
  &:hover {
    color: #2B3034;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

class MenuList extends React.PureComponent {
  renderMenuList = (link) => (
    <Wrapper key={link.key} onClick={this.props.onClick}>
      <Link to={link.to}>
        <Anchor
          animate={{ offset: 20, duration: 600 }}
          {...this.props}
        >
          <p> {link.message} </p>
        </Anchor>
      </Link>
    </Wrapper>
  )

  render() {
    return (
      MenuLinks.map(this.renderMenuList)
    );
  }
}

MenuList.propTypes = {
  onClick: PropTypes.func,
};

export default MenuList;
