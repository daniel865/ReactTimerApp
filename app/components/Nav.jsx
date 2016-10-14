import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {

	constructor(props){
		super(props);
	}

  render(){
  	return(
  		<div className="top-bar">
		  <div className="top-bar-left">
		    <ul className="menu">
		      <li className="menu-text">React Timer App</li>
		      <li>
		      	<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>  
		      </li>
		      <li>
		      	<Link to="/" activeClassName="active-link">Countdown</Link>
		      </li>		      
		    </ul>
		  </div>
		  <div className="top-bar-right">
		    <ul className="menu">
		      <li><a href="#">Created by Daniel Rúa</a></li>
		    </ul>
		  </div>
		</div>
  	)  
  }

}