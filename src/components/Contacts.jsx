import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { filterByName } = this.props;

    return (
      <ul>
        {filterByName().map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}
