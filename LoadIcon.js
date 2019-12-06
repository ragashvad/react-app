import React from 'react';

const LoadIcon = (props) => {
    return(
        <div className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>
    );

}

LoadIcon.defaultProps = {
  message : 'Loading'
};

export default LoadIcon;
