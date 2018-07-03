import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';


// let songs = {
//     songs: ["Emotionless", "In My Feelings", "Summer Games"]
// }

ReactDOM.render(<App 
    // songs={songs.songs} 
    />, document.getElementById('root'));
registerServiceWorker();
