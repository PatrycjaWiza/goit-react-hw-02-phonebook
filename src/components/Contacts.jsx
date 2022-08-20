import { Component } from 'react';
import { Button } from './Styles';

export class Contacts extends Component {
  render() {
    const { filterByName, toDelete } = this.props;

    return (
      <ul>
        {filterByName().map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <Button
              type="submit"
              onClick={() => {
                toDelete(id);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}
