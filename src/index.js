import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './resources/js/registerServiceWorker';
import App from './App';
import store from './store';

import './resources/scss/index.scss';
import './resources/js/cognitiv';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faSignOutAlt, faCog, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel,faSignOutAlt, faCog, faChevronRight );

global.store = store;

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./App', () => render(App));
registerServiceWorker();
