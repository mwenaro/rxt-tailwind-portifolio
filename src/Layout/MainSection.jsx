import React from 'react';
import PropTypes from 'prop-types';

function MainSection({ children }) {
  return <main>{children}</main>;
}

MainSection.propTypes = {
  children: PropTypes.any
};
export default MainSection;
