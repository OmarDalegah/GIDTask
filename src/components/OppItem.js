import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class OppItem extends Component {
  render() {


      return (
      	<div className="shadow p" style={{position: 'relative', backgroundImage: `url(${this.props.opp.cover_photo_urls})`,
      	 width : '340px',
      	 height : '340px'}}>
      	<br />
      	<p align="center">{this.props.opp.title}</p>


      	<div style={{ 
      	position: 'absolute',
      	bottom:'0',
	    left:'0', 
	    width: '340px', 
	    height: '100px', 
	    backgroundColor: 'White'}}>

      	<p align="left">Partner: {this.props.opp.branch.organisation.name}</p>
      	<p align="left">Location: {this.props.opp.location}</p>
      	<p align="right">Duration: {this.props.opp.duration} weeks.</p>
      	</div>
      	
      	</div>

      	);
  }
}




export default OppItem;
