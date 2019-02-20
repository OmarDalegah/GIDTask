import React, { Component } from 'react';
import OppItem from './OppItem';
import PropTypes from 'prop-types';

class Opps extends Component {
  render() {
      return this.props.opps.map((opp) => (
      	<div className="col-sm-4" data-toggle="modal" data-target="#myModal">
      	<OppItem key={opp.id} opp={opp}/>
      	<br />
      	</div>
      	));
  }
}


export default Opps;
