import React, { Component } from "react";
import { connect } from 'react-redux';
import { Table, Pagination } from 'antd';
import Jump from './jump'
import { add, minus } from "../Actions";

class Yrz extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage: 1
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'getList'
        })
    }

    add = (num) =>{
        // const action = add(num);
        // this.props.dispatch(action)
        this.props.dispatch({
            type:'add',
            num: 1
        })
    }
    minus = (num) => {
        // const action = minus(num);
        // this.props.dispatch(action)
        this.props.dispatch({
            type:'minus',
            num: 1
        })
    }

    childClick = () => {
        console.log('e', this);
        this.childFangFa.childMethod()
    }

    render() {
        const { value, list } = this.props;
        console.log('length', list? list.length:0)
        const paginationProps = {
            page: this.state.currentPage,
            // onChange : (page) => this.handleTableChange(page),
            pageSize: 5,
            showSizeChanger: false,
            total: list? list.length:0
        }
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render: (res)=>{
                    if(res==='男'){
                        return '男'
                    }else{
                        return '女'
                    }
                }
            },
        ];
        return (
            <div>
                <button onClick={()=>{
                    this.add()
                }}>点我+1</button>
                <button onClick={()=>{
                    this.minus()
                }}>点我-1</button>
                <div>{value}</div>
                <Jump childMethod={(ref)=>{ this.childFangFa = ref}}></Jump>
                <div onClick={this.childClick}>调用子组件的函数</div>

                <Table dataSource={list} columns={columns} pagination={paginationProps}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state.value,
        list: state.list
    }
}
export default connect(mapStateToProps)(Yrz);