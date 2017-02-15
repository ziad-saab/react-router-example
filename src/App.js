import React, { Component } from 'react';
import {Link} from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/settings">SETTINGS</Link></li>
                    <li><Link to="/reddit/The_Donald">DONALD</Link></li>
                    <li><Link to="/reddit/montreal">MTL</Link></li>
                </ul>
            </nav>
            <main>
                {this.props.children}
            </main>
            <footer>
                &copy; 2017 blah
            </footer>
        </div>
    );
  }
}

export default App;
