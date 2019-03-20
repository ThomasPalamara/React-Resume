import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/index.css';
import Resume from './components/Resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
