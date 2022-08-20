import { Component } from 'react';
import { Input } from './Styles';

export class Filter extends Component {
  render() {
    const { filterByName, value } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={filterByName}
        ></Input>
      </>
    );
  }
}
