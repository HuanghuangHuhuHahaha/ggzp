import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';

import {HashRouter} from 'react-router-dom'
import Container from './container/container'
import store from './redux/store'

// ReactDOM.render(<Button>Start</Button>, mountNode);

ReactDOM.render((
    <HashRouter>
        <Provider store={store}>
            <Container/>

        </Provider>
    </HashRouter>
),document.getElementById('root'))