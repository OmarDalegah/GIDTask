import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Opps from './components/Opps'

class App extends Component {
  state =
  {
    Opps: [],
    Page: 1,
    loading: false,
    Editid : 0,
    Edittitle: "Default Title",
    Editdscrp: "Default Description",
  }
  componentDidMount()
  {
    document.addEventListener('scroll', this.trackScrolling);
    axios.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&page='+this.state.Page+'&per_page=12').then(res => this.setState({Opps : res.data.data, Paging : res.data.paging}))
  }

  loadMoreOpps()
  {
    if (this.state.loading === true)
    {
      document.addEventListener('scroll', this.trackScrolling);
      this.state.Page = this.state.Page+1
      axios.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&page='+ (this.state.Page) +'&per_page=12').then(res => this.setState({Opps : [...this.state.Opps,...res.data.data]}))
      this.setState({loading : false})
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  saveClick() {
    this.updateOpp(document.getElementById('oppid').value,document.getElementById('opptitle').value,document.getElementById('oppdscrp').value)
  }

  updateOpp(id,title,description)
  {
    axios.patch('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/'+id+'?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c', {
                'title': title,
                'description': description,
            })
            .then((response) => {
                   console.log(response);
            });
  }

  trackScrolling = () => {
  const wrappedElement = document.getElementById('header');
  if (this.isBottom(wrappedElement)) {
    this.setState({loading : true})
    this.loadMoreOpps();
    
    }
  };

  render() {
    return (
      <div className="App">
        <div className="page-container">
          <div id="header">
            <div className="row">
              <Opps opps={this.state.Opps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
