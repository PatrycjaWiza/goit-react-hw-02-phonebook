import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contact } = this.props;

    return (
      <ul>
        <li>{contact}</li>
      </ul>
    );
  }
}
