import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      results: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSearch(this.state.results);
    document.querySelector('input').blur();
  }

  render() {
    return(
      <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group has-feedback">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <input type="text"
                   className="form-control"
                   id="address"
                   placeholder="Find a location..."
                   value={this.state.value}
                   onChange={this.handleChange} />

            <i className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></i>
          </div>
        </div>
      </form>
    )
  }
}

export default Search;
