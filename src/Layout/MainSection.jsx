import React from 'react';
import PropTypes from 'prop-types';

function MainSection({ children }) {
  return <main className="w-full min-h-full sm:w-[75wh] border-4">{children}</main>;
}

MainSection.propTypes = {
  children: PropTypes.any
};
export default MainSection;
