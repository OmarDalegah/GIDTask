import React, { Component } from 'react';
import OppItem from './OppItem';
import axios from 'axios';
import PropTypes from 'prop-types';

class Opps extends Component {
	handleClick(title,id) {
		axios.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/'+id+'?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c').then(res => (document.getElementById('oppdscrp').value = res.description))
    	document.getElementById('opptitle').value = title
  }
  render() {
      return this.props.opps.map((opp) => (
      	<div className="col-sm-4" data-toggle="modal" data-target="#myModal">
      	<OppItem key={opp.id} opp={opp} onClick={this.handleClick(opp.title,opp.id)} />
      	<br />
      	</div>
      	));
  }
}


export default Opps;
