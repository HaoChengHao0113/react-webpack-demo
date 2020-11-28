import React, {Component} from "react";
import LeftMenu from "../leftMenu/menu";
import {Layout, Menu, Breadcrumb} from 'antd';
import { browserHistory  } from 'react-router';
import Header from '../conponments/Header';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // if(!localStorage.token) {
        //     browserHistory .push('/login')
        // }
        if(!this.getCookie("username") || !this.getCookie('password')) {
            browserHistory .push('/login')
        }
    }

    getCookie = (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
        }
        return "";
    }

    render() {
        return (
            <Layout>
                <Layout.Header style={{ padding: 0, height:80 }}>
                    <Header></Header>
                </Layout.Header>
                <Layout>
                    <Layout.Sider style={{ height: '100vh'}}>
                        <LeftMenu></LeftMenu>
                    </Layout.Sider>
                    <Layout.Content>
                            { this.props.children }
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}