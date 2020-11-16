import React, {Component} from 'react';
import { connect } from 'react-redux'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            num: 0
        }
    }
    componentDidMount() {

        // function fun(){
        //     this.a = 0;
        //     this.b = function(){
        //         console.log(this.a);
        //     }
        // }
        // fun.prototype = {
        //     b: function(){
        //         this.a = 20;
        //         console.log(this.a);
        //     },
        //     c: function(){
        //         this.a = 30;
        //         console.log(this.a);
        //     }
        // }
        // var my_fun = new fun();
        // my_fun.b();	// 0
        // console.log(my_fun.a); // 0
        // my_fun.c();	//公有方法	this=>my_fun this.a = 30（将私有属性a修改为30）
        // console.log(my_fun.a);// 30
        // var my_fun2 = new fun();
        // console.log(my_fun2.a);//0
        // my_fun2.__proto__.c();	//this=>my_fun2.__proto__ 当前实例通过原型链在类的共有属性上增加了一个a:30
        // console.log(my_fun2.a);// 0
        // console.log(my_fun2.__proto__.a);
        this.props.getMusicList({
            method:'baidu.ting.billboard.billList',
            type:1,
            size:10,
            offset:0
        })
    }

    render() {
        return (
            <div>
                test
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        musicList: state.musicList
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getMusicList(payload){
            dispatch({type: 'getMusicList', payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);