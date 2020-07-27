import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';
import {Children, Title} from './styles';

const PageHeader = props => {
  const {children, imgAlt, title} = props;
  return (
    <>
      <Link to={'/'}>
        <img data-testid='imgHeader' src={logo} alt={imgAlt} height={'100px'} />
      </Link>
      <Title>{title}</Title>
      <Children>{children}</Children>
    </>
  );
}

PageHeader.prototype = {
  children: PropTypes.any,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PageHeader;

