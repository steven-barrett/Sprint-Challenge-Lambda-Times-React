import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let className = 'tab';
      if (props.thisTab === props.selectedTab) {
        className += ' active-tab';
      }
  return (
    <div
      className={className}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         onClick={() => props.selectTabHandler(props.thisTab)}     
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tabs.propTypes = {  
  selectedTab: PropTypes.string,
  thisTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
