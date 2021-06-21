import React, { Component } from 'react';

class Audio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1,
        };
        this.audio = React.createRef()
    }

    handlePlay = () => {
        this.setState({
            active: 2,
        })
        this.audio.current.play()
    }
    handlePause = () => {
        this.setState({
            active: 1,
        })
        this.audio.current.pause()
    }
    handleStop = () => {
        this.setState({
            active: 1,
        })
        this.audio.current.load()
    }
    render() {
        return (
            <div className='audio'>
                <audio ref={this.audio} loop controls src="https://cdn9.sefon.pro/prev/A8gRDfDiOL9UAcyn55VFtw/1624308750/239/Galibri%20%26%20Mavik%20-%20%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B8%D0%BA%D0%BE%20%D0%A4%D0%B5%D0%BB%D0%BB%D0%B8%D0%BD%D0%B8%20%28192kbps%29.mp3">
                </audio>
                {this.state.active === 1 ? <button onClick={() => { this.handlePlay() }}>PLAY</button>
                    :
                    null
                }
                {this.state.active === 2 ?
                    <>
                        <button onClick={() => { this.handleStop() }}>STOP</button>
                        <button onClick={() => { this.handlePause() }}>PAUSE</button>
                    </>
                    :
                    null
                }
            </div>
        );
    }
}

export default Audio;