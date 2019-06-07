import React from 'react';

import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let className = 'tab';
      if (props.thisTab === props.selectedTab) {
        className += ' active-tab';
      }
  return (
    <div className={className} onClick={() => props.selectTabHandler(props.thisTab)}>
      {props.thisTab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {  
  selectedTab: PropTypes.string,
  thisTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
