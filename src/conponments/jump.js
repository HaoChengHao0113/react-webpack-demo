import React, {Component} from 'react';

class Jump extends Component {
    componentDidMount() {
        this.props.childMethod(this)
    }

    childMethod = () =>{
        console.log('父组件调用了子组件的方法')
    }
    render() {
        return (
            <div>
                321212121212121212121212121212121212121212121212121212121212121
            </div>
        );
    }
}

export default Jump;