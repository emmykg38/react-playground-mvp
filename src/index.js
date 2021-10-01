import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlaygroundDetails from './PlaygroundDetails'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<PlaygroundDetails />, document.getElementById('root')); registerServiceWorker();

