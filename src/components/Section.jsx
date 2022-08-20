import { Component } from 'react';
import { Title } from './Styles';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Title>{title}</Title>
        {children}
      </>
    );
  }
}
