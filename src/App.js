import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <fragment>
                <div onClick={this.props.addClick}>This is the thing we need to do for the
                    counter!
                </div>
                <h1>{this.props.clicks}</h1>
            </fragment>
        );
    }
}

export default App;
