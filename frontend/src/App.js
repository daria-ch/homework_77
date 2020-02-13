import React, {Component} from 'react';
import FormBlock from "./components/FormBlock/FormBlock";
import './App.css';
import {fetchMessages, postMessage} from "./store/actions";
import {connect} from "react-redux";
import Message from "./components/Message/Message";

class App extends Component {
    state = {
        toggle: false
    };

    componentDidMount() {
        this.props.fetchMessages();
    }


    isToggle = () => {
        this.setState({toggle: true});
    };

    postMessage = async message => {
        await this.props.postMessage(message);
        this.props.fetchMessages();
    };

    render() {
        let toggleStyle = {
            display: 'none'
        };

        let toggleLink = {
            display: 'block',
            textAlign: 'center'
        };

        if (this.state.toggle) {
            toggleStyle = {
                display: 'block'
            };
            toggleLink = {
                display: 'none',
                textAlign: 'center'
            };
        }

        const messages = this.props.messages.map(message => {
            return <Message key={message.id}
                            message={message.message}
                            author={message.author}
                            datetime={message.datetime}
            />
        });


        return (
            <div className='App'>
                <div style={toggleLink}>
                    [
                    <button className='link' onClick={this.isToggle}>Start a New Thread</button>
                    ]
                </div>
                <div style={toggleStyle}>
                    <FormBlock onSubmit={this.postMessage}/>
                </div>
                <div className='messages'>
                    {messages}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => ({
    fetchMessages: () => dispatch(fetchMessages()),
    postMessage: (message) => dispatch(postMessage(message))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);