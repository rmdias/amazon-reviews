import React, { Component, Fragment } from 'react';
import { Theme } from 'luna-ui-lib'

// Connectors
import Filters from 'connectors/Filters'
import Reviews from 'connectors/Reviews'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Theme>
        <div className="arw_wrapper">
          <Filters />
          <Reviews />
        </div>
      </Theme>
    );
  }
}
