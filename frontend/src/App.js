import React, {Component} from 'react';
import FormBlock from "./components/FormBlock/FormBlock";
import './App.css';

class App extends Component {
    state = {
        toggle: false
    };

    isToggle = () => {
        this.setState({toggle: true});
    };

    render() {
        let toggleStyle = {
            display: 'none'
        };

        let toggleLink = {
            display: 'block'
        };

        if (this.state.toggle) {
            toggleStyle = {
                display: 'block'
            };
            toggleLink = {
                display: 'none'
            };
        }

        return (
            <div className='App'>
                <div style={toggleLink}>
                    [<a href="#" onClick={this.isToggle}>Start a New Thread</a>]
                </div>
                <div style={toggleStyle}>
                    <FormBlock/>
                </div>

            </div>
        );
    }
}

export default App;