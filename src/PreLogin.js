import React from 'react';
import { Link } from 'react-router-dom';

const PreLogin = props => (
  (<div>
    {console.log(props.location.state)}
    <div>{console.log('Props', props.location.state)}</div>
    <div><Link to={props.location.state.redirectTo}>TEST</Link></div>
  </div>)
);

export default PreLogin;
