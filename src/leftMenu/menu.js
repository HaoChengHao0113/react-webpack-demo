import { Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { data } from './leftMenu.json';
import { Link } from 'react-router'
import './menu.less';

const { SubMenu } = Menu;

class LeftMenu extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
    }

    // 递归动态生成菜单栏
    createMenuListMap = (list) => {
        return list.map((item) => {
            if(item.children) {
                return (
                    <SubMenu
                        key={item.id}
                        title={item.categoryName}
                        className='subMenu'
                    >
                        {
                            // 根据当前菜单的 children 去生成其子菜单，由于菜单项 menuList 是个有终结的数据，且嵌套层数并不复杂，所以这里不用担心递归会造成栈溢出的问题
                                this.createMenuListMap(item.children)
                        }
                    </SubMenu>
                );
            } else {
                return (
                        <Menu.Item key={item.id}>
                            <Link to={item.path}>{item.categoryName}</Link>
                        </Menu.Item>
                );
            }
        });
    };

    render() {
        return (
            <Menu
                mode="inline"
                className='leftMenu'
                theme='light'
            >
                {
                    this.createMenuListMap(data.children)
                }
            </Menu>
        );
    }
}

export default LeftMenu;