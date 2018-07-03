import React, { Component } from 'react';
import './Songs.css';

class Songs extends Component {
    constructor() {
        super()

        this.state = {
            name: ["Emotionless", "In My Feelings", "Summer Games"] 
        }
    }
    render() {
        return (
            <div>
                <p>Here are some songs in the new album:</p>
                <ul className="SongList">
                    <li>{this.state.name[0]}</li>
                    <li>{this.state.name[1]}</li>
                    <li>{this.state.name[2]}</li>  
                 </ul>
            </div>
        );
    }
}

export default Songs;