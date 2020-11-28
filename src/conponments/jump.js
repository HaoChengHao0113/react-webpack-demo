import React, {Component} from 'react';
import { withRouter } from "react-router";

class Jump extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.method(this)
        console.log('-----',this.props.history)
    }

    childMethod = () =>{
        console.log('父组件调用了子组件的方法')
    }

    onClick = () => {
        // this.props.onChangea('yrz is beautiful')
    }
    render() {
        return (
            <div onClick={this.onClick}>
                321212121212121212121212121212121212121212121212121212121212121
            </div>
        );
    }
}

export default withRouter(Jump);