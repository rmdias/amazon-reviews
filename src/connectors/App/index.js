import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { Theme } from 'luna-ui-lib'

// Connectors
import Filters from 'connectors/Filters'
import Reviews from 'connectors/Reviews'


import connector from './connector'
import './styles.css'

class App extends PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Theme>
          <div className="arw_wrapper">
            <Filters />
            <Reviews />
          </div>
        </Theme>
      </Provider>
    );
  }
}

export default connector(App)