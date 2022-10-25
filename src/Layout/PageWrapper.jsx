import PropTypes from 'prop-types';
import React from 'react';

export const PageWrapper = ({ children }) => {
  return <div>{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.any
};

export default PageWrapper;
