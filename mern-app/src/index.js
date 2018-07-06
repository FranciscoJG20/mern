import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { addSong } from '../actions/song'
import { deleteSong } from '../actions/song'
import { updateSong } from '../actions/song' 
import { Provider } from "react-redux";

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))


store.dispatch(addSong('Survival', 400))
store.dispatch(addSong("I'm Upset", 500))

store.dispatch(deleteSong(0))

store.dispatch(updateSong(0, {length: 350}))


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
