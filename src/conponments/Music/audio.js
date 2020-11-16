import React, {Component} from 'react';

class Audio extends Component {
    render() {
        const { ...args } = this.props;
        return (
            <div>
                <audio src={this.props.src} { ...args }></audio>
            </div>
        );
    }
}

export default Audio;