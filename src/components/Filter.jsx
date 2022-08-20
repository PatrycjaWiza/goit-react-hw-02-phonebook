import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filterByName, value } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={filterByName}
        ></input>
      </>
    );
  }
}
