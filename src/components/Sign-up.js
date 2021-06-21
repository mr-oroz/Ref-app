import React, { Component } from 'react';
import '../App.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.state = {
            input: { key1: '', key2: '' }
        }
    }
    focusTextInput() {
        this.textInput.focus()
    }

    handleKeUp = (e, m) => {
        if (e.code === 'Enter' && e.target.value.length > 3) {
            this.focusTextInput()
        }
    }

    handleBlur = (e, m) => {
        this.setState((prev) => {
            const input = prev.input;
            return {
                input: {
                    key1: m === 'key1' ? (e === '' ? 'red' : 'green') : input.key1,
                    key2: m === 'key2' ? (e === '' ? 'red' : 'green') : input.key2,
                }
            }
        })
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    onKeyUp={(e) => this.handleKeUp(e)}
                    className={this.state.input.key1}
                    onBlur= {(e) => this.handleBlur(e.target.value, 'key1')}
                />
                <input ref={(v) => {
                    this.textInput = v
                }}
                    className={this.state.input.key2}
                    onBlur= {(e) => this.handleBlur(e.target.value, 'key2')}
                    type='password' />
                <button>Click</button>
            </div>
        );
    }
}

export default SignUp;