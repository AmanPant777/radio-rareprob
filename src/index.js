import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'

store.subscribe(()=>{
  localStorage.setItem('Recent',JSON.stringify(store.getState().user.users.slice(0,5)))
})

ReactDOM.render(
  <Provider store={store}>
        <React.StrictMode>
        <App />
        </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


