import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contact } = this.props;

    return (
      <>
        <li>{contact}</li>
      </>
    );
  }
}
