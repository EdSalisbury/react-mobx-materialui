import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    PersonStore
} from './common/stores';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider
        PersonStore={PersonStore}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
