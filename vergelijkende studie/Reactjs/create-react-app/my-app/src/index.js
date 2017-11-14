import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(element,hello, document.getElementById('root'));
registerServiceWorker();
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Stijn',
    lastName: 'Heynderickx'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

const hello = <h1>Hello, world!</h1>;