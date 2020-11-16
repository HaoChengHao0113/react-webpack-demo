import React, {Component} from 'react';
import { Input } from 'antd';
import './index.less';
import logo from '../../img/githubLogo.png'

const ALink = [
    { name: 'Pull Requests', path: '/login'},
    { name: 'Issues', path: '/'},
    { name: 'Marketplace', path: '/'},
    { name: 'Explore', path: '/'}
]

class Index extends Component {
    render() {
        return (
            <div className='header'>
                <img src={ logo } className='logo'/>
                <Input className='input' />
                {
                    ALink.map((item,index)=>{
                        return (
                            <a href={item.path} className='font-style' key={index}>{item.name}</a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Index;