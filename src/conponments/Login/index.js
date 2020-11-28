import React, {Component} from 'react';
import { Form, Input, Button, Select } from 'antd';
import { browserHistory  } from 'react-router';
import FormList from '../../Common/Form';
import { msgToast } from '../../Utils';
import './index.less';
import img from '../../img/logo.png';
import userPic from '../../img/user.png';
import pwdPic from '../../img/pwd.png';

class Index extends Component {
    constructor(props) {
        super(props);
        const List=[
            {type: 'input', name: 'name', label: '用户名', suffix:(<img className='suffixIcon' src={userPic}/>)},
            {type: 'input', name: 'pwd', label: '密码', suffix:(<img className='suffixIcon' src={pwdPic}/>)},
        ]
        this.state={
            list: List,
        }
    }
    componentDidMount() {
        if (this.getCookie("username") && this.getCookie("password")){
            this.refs.form.setFieldsValue({
                name: this.getCookie("username"),
                pwd: this.getCookie("password")
            })
                browserHistory .push('/')
        }
    }

    onFinish= (value) => {
        if(value.name==='chenghao'&&value.pwd==='123456') {
            let cookie = document.cookie;
            this.setCookie("username",value.name,1)
            this.setCookie("password",value.pwd,1)
            // localStorage.setItem('token', new Date())
            browserHistory .push('/')
        }else {
            msgToast('用户名或密码错误')
        }
    };

    setCookie = (key, value, expiresDay) => {
        let d = new Date()
        d.setTime(d.getTime()+(expiresDay*24*60*60*1000));
        let expires = "expires="+d.toGMTString();
        document.cookie = `${key}=${value}; ${expires}`
    }

     dateChange = (num = 1,date = false) => {
        if (!date) {
            date = new Date();//没有传入值时,默认是当前日期
            date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        date += " 00:00:00";//设置为当天凌晨12点
        date = Date.parse(new Date(date))/1000;//转换为时间戳
        date += (86400) * num;//修改后的时间戳
        var newDate = new Date(parseInt(date) * 1000);//转换为时间
        return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
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
            <div className='background'>
                <div className='background-logo'>
                    <img src={ img } className='img'/>
                </div>
                <div className='login'>
                    <div className='name'>
                        <span className='name-span'>IT运维管理系统</span>
                    </div>
                    <div className='form'>
                        <Form
                            ref = 'form'
                            layout='vertical'
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="name"
                                label="用户名"
                                colon={false}
                            >
                                <Input
                                    className='input'
                                    suffix={<img className='suffixIcon' src={userPic}/>}
                                />
                            </Form.Item>
                            <Form.Item
                                name="pwd"
                                label="密码"
                                colon={false}
                            >
                                <Input.Password
                                    className='input'
                                    suffix={<img className='suffixIcon' src={pwdPic}/>}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className='submit-button'
                                >
                                    立即登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    {/*<div className='form'>*/}
                    {/*    <FormList*/}
                    {/*        ref = 'form'*/}
                    {/*        layout='vertical'*/}
                    {/*        onFinish={this.onFinish}*/}
                    {/*        formList={this.state.list}*/}
                    {/*        classStyle='submit-button'*/}
                    {/*        buttonName='立即登录'*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Index;