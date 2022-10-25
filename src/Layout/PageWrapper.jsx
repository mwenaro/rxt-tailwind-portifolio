import PropTypes from 'prop-types';
import React from 'react';

export const PageWrapper = ({ children }) => {
  return <div className="p-10 bg-black">{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.any
};

export default PageWrapper;
