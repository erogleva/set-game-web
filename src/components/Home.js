// @flow
import React, { Component } from 'react';
import CardsGrid from './CardsGrid';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className='wrapper'>
        <CardsGrid />
      </div>
    );
  }
}
