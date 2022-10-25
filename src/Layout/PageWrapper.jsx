import PropTypes from 'prop-types';
import React from 'react';

export const PageWrapper = ({ children }) => {
  return <div className="p-10 flex flex-row justify-center items-center ">{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.any
};

export default PageWrapper;
