import React, { Component } from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class Candan1 extends Component{
    constructor(props) {
        super(props);
    }
    onClick = () =>{
        browserHistory.push('/jump')
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                <div onClick={this.onClick}>
                    {value}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Candan1)